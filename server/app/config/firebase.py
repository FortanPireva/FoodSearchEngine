from pydantic.env_settings import BaseSettings


class FirebaseSettings(BaseSettings):
    certificate: str

    class Config:
        env_prefix = "firebase_"
        case_sensitive = False
