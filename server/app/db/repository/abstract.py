from abc import ABC, abstractmethod

from server.app.domain.product import Product


class UserRepositoryAbstract(ABC):
    pass


class ProductRepositoryAbstract(ABC):
    @abstractmethod
    def get_products(self, search_query: str):
        pass

    @abstractmethod
    def create_product(self, product: Product):
        pass
