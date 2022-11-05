import json
from typing import Dict, Optional, List

from loguru import logger

from config import app_settings
from config.firebase import FirebaseSettings
from domain.product import Product

import firebase_admin

from repository.abstract import ProductRepositoryAbstract


async def get_firebase() -> "FirebaseRepository":
    try:
        firebase = FirebaseRepository(app_settings.firebase)
        yield firebase
    except Exception as exc:
        logger.error("Failed to get the database dependency")
        logger.exception(exc)
        raise exc


class FirebaseRepository(ProductRepositoryAbstract):

    _instance: "FirebaseRepository" = None

    def __init__(self, settings: FirebaseSettings):
        try:
            certificate: Dict = json.loads(settings.certificate)

            if FirebaseRepository._instance:
                self.firebase = FirebaseRepository._instance
            else:
                self.firebase = firebase_admin.initialize_app(
                    firebase_admin.credentials.Certificate(cert=certificate),
                    name=settings.name,
                )  # type: firebase_admin.App
                FirebaseRepository._instance = self.firebase
                logger.success("Created Firebase connection")

        except Exception as exc:
            logger.error("Firebase connection failed")
            logger.exception(exc)
            raise exc

    async def close(self):
        """No need to close the firebase connection."""

        pass

    async def get_products(
        self, search_query: Optional[str] = None, skip: int = 0, limit: int = 10
    ) -> List[Product]:
        return []

    async def create_product(self, product: Product):
        raise NotImplemented
