from fastapi import APIRouter

router = APIRouter()


# TODO: finish this
@router.get("/feed", tags=["users"])
def login():
    return {"feed": "feed"}
