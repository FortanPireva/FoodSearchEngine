from abc import ABC, abstractmethod
from typing import List, Optional

from domain.product import Product


class UserRepositoryAbstract(ABC):
    pass


class ProductRepositoryAbstract(ABC):
    @abstractmethod
    async def get_products(
        self, search_query: Optional[str] = None, skip: int = 0, limit: int = 10
    ) -> List[Product]:
        pass

    @abstractmethod
    async def create_product(self, product: Product):
        pass
