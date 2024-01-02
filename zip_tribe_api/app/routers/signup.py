from fastapi import APIRouter

router = APIRouter()


# TODO: finish this
@router.get("/signup", tags=["users"])
def signup():
    return {"signup": "signup"}

