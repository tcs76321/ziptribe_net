from fastapi import APIRouter

router = APIRouter()


@router.get("/users/", tags=["users"])
def read_users():
    return [{"username": "Rick"}, {"username": "Morty"}]


@router.get("/users/{username}", tags=["users"])
def read_user(username: str):
    return {"username": username}
