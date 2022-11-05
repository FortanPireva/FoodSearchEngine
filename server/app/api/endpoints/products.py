from typing import List, Optional

from fastapi import APIRouter, Depends

from domain.product import Product

from repository.abstract import FirebaseRepository, get_firebase

router = APIRouter()


@router.get("/product", response_model=List[Product])
async def read_products(
    db: FirebaseRepository = Depends(get_firebase),
    *,
    search_query: Optional[str] = None,
    skip: int = 0,
    limit: int = 100,
) -> List[Product]:
    return await db.get_products(search_query=search_query, skip=skip, limit=limit)
