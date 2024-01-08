from fastapi import APIRouter, status

name = "login"
router = APIRouter(
    prefix="/" + name,
    tags=[name],
    dependencies=[],
    responses={
        404: {"description": "Not found"},
    },
)


@router.get("/login/", tags=["users"], status_code=status.HTTP_401_UNAUTHORIZED)
def login():
    return {"Unauthorized": "Denied"}
