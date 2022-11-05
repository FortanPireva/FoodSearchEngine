from datetime import datetime

from pydantic.main import BaseModel


class Product(BaseModel):
    pk: int
    title: str
    description: str
    expiration_date: datetime
