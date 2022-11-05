from typing import List, Optional

from fastapi import APIRouter, Depends

from server.app.domain.product import Product

from server.app.repository.abstract import FirebaseRepository, get_firebase

router = APIRouter()


@router.get("/product", response_model=List[Product])
def read_products(
    db: FirebaseRepository = Depends(get_firebase),
    *,
    search_query: Optional[str],
    skip: int = 0,
    limit: int = 100,
):
    return db.get_products(search_query=search_query, skip=skip, limit=limit)
