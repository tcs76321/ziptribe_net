from fastapi import APIRouter

router = APIRouter()


# TODO: finish this
@router.get("/login", tags=["users"])
def login():
    return {"login": "login"}
