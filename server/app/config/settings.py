from pydantic.env_settings import BaseSettings

from .firebase import FirebaseSettings


__all__ = ["settings"]


class Settings(BaseSettings):
    firebase: FirebaseSettings = FirebaseSettings()


settings = Settings()
