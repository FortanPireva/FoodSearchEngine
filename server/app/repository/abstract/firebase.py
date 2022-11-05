import json
from contextlib import asynccontextmanager
from typing import Dict, Optional

from fastapi import Depends
from loguru import logger

from server.app.config.firebase import FirebaseSettings
from server.app.domain.product import Product

import firebase_admin

from server.app.repository.abstract import ProductRepositoryAbstract


@asynccontextmanager
async def get_firebase(settings=Depends(FirebaseSettings)) -> "FirebaseRepository":
    try:
        firebase = FirebaseRepository(settings)
        yield firebase
    except Exception as exc:
        logger.error("Failed to get the database dependency")
        logger.exception(exc)
        raise exc
    finally:
        if "conn" not in locals():
            return
        firebase.close()
        logger.error("Database connection closed")


class FirebaseRepository(ProductRepositoryAbstract):
    def __init__(self, settings: FirebaseSettings):
        try:
            certificate: Dict = json.loads(settings.certificate)
            self.firebase = firebase_admin.initialize_app(
                firebase_admin.credentials.Certificate(cert=certificate)
            )  # type: firebase_admin.App
        except Exception as exc:
            logger.error("Firebase connection failed")
            logger.exception(exc)
            raise exc

    def close(self):
        """No need to close the firebase connection."""

        pass

    async def get_products(
        self, search_query: Optional[str] = None, skip: int = 0, limit: int = 10
    ):
        raise NotImplemented

    async def create_product(self, product: Product):
        raise NotImplemented
