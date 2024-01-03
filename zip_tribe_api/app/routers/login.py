from fastapi import APIRouter, status

router = APIRouter()


@router.get("/login/", tags=["users"], status_code=status.HTTP_401_UNAUTHORIZED)
def login():
    return {"Unauthorized": "Denied"}
