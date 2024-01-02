from fastapi import APIRouter

router = APIRouter()


@router.get("/", tags=["users"])
def root_route():
    return {"msg": "Hello World"}
