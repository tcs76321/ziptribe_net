from datetime import datetime
from pydantic import BaseModel


class User(BaseModel):
    username: str
    first_name: str
    last_name: str
    middle_name: str = None  # Optional
    dob: datetime.date
    # email:
    # phone:
    # zipcode:
    password: str
    active: bool = True
