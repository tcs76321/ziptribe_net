from datetime import datetime
from pydantic import BaseModel, EmailStr
from typing import Annotated, Optional


class UserBase(BaseModel):
    username: str
    first_name: str
    last_name: str
    middle_name: str = None  # Optional
    dob: datetime.date
    email: EmailStr
    phone: str
    zipcode: int
    active: bool = True


class UserCreate(UserBase):
    password: str


class UserUpdate(UserBase):
    password: Optional[str] = None


class UserInDB(UserBase):
    hashed_password: str
    is_active: bool = True
