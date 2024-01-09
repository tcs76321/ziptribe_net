from datetime import datetime
from pydantic import BaseModel, EmailStr
from typing import Annotated, Optional


class UserBase(BaseModel):
    username: str
    first_name: str
    last_name: str
    dob: datetime.date
    email: EmailStr
    phone: str
    zipcode: int
    active: bool = True


class UserSignup(UserBase):
    password: str


class UserLogin(BaseModel):
    username: str
    password: str


class UserSelfUpdate(UserBase):
    username = str
    password: Optional[str] = None
    zipcode: Optional[int] = None
    phone: Optional[str] = None
    email: Optional[EmailStr] = None
    active: Optional[bool] = None


class UserAdminDeactivation(UserBase):
    active: bool = False


# TODO
class UserInDB(UserBase):
    hashed_password: str
    is_active: bool = True
