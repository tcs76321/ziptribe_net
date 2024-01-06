from fastapi import APIRouter

router = APIRouter(
    prefix="/feed",
    tags=["feed"],
    dependencies=[],
    description="Operations related to the feed",
    responses={404: {"description": "Not found"}},
)

# TODO: finish this
@router.get()
def login():
    return {"feed": "feed"}
