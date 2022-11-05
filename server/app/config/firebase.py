from pydantic.env_settings import BaseSettings


class FirebaseSettings(BaseSettings):
    certificate: str
    name: str = "FoodSearch"

    class Config:
        env_prefix = "firebase_"
        case_sensitive = False
