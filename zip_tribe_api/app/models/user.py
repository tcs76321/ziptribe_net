from fastapi import FastAPI, Header, HTTPException
from pydantic import BaseModel, validator


class User(BaseModel):
    username: str
    first_name: str
    last_name: str
    middle_name: Optional[str] = None
    dob: datetime.date
    email: email_validator.EmailStr
    phone: phone_validator.PhoneNumber
    zipcode: zipcode_validator.ZipCode
    password: str
    active: bool = True
