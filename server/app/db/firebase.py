import json
from contextlib import contextmanager
from typing import Dict

from loguru import logger
from firebase_admin import credentials

import firebase_admin

from server.app.config import settings


@contextmanager
def get_firebase_connection() -> firebase_admin.App:
    try:
        certificate: Dict = json.loads(settings.firebase.certificate)
        firebase = firebase_admin.initialize_app(
            credentials.Certificate(cert=certificate)
        )
        yield firebase
    except Exception as exc:
        logger.error("Firebase connection failed")
        logger.exception(exc)
        raise exc
    finally:
        if "conn" not in locals():
            return
        # Close connection
        # logger.info("Firebase connection closed")
