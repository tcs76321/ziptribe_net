from fastapi import APIRouter

name = "signup"
router = APIRouter(
    prefix="/" + name,
    tags=[name],
    dependencies=[],
    responses={
        404: {"description": "Not found"},
    },
)


@router.get("/signup", tags=["users"])
def signup():
    return {"signup": "signup"}

