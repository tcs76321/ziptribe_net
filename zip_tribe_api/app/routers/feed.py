from fastapi import APIRouter

name = "feed"
router = APIRouter(
    prefix="/" + name,
    tags=[name],
    dependencies=[],
    responses={
        404: {"description": "Not found"}
    },
)


# TODO: finish this
@router.get()
def login():
    return {"feed": "feed"}
