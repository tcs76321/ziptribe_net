from fastapi import APIRouter

router = APIRouter()


@router.get("/signup", tags=["users"])
def signup():
    return {"signup": "signup"}

