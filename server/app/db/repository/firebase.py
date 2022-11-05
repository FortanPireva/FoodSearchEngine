from server.app.db.repository.abstract import ProductRepositoryAbstract
from server.app.domain.product import Product


class FirebaseRepository(ProductRepositoryAbstract):
    def get_products(self, search_query: str):
        raise NotImplemented

    def create_product(self, product: Product):
        raise NotImplemented
