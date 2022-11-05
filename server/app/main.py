from server.app.api.endpoints.products import router as products_router
from server.app.config import app_settings

from fastapi import FastAPI

app = FastAPI(title=app_settings.project.name, openapi_url="/api/v1/openapi.json")

app.include_router(products_router, prefix=app_settings.project.api_prefix)
