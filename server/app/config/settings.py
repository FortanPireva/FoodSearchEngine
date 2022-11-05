from pydantic.env_settings import BaseSettings

from .firebase import FirebaseSettings


__all__ = ["app_settings"]


class ProjectSettings(BaseSettings):
    name: str = "FoodSearch"
    api_prefix: str = "/api"

    class Config:
        env_prefix = "project_"
        case_sensitive = False


class AppSettings(BaseSettings):
    firebase: FirebaseSettings = FirebaseSettings()
    project: ProjectSettings = ProjectSettings()


app_settings = AppSettings()
