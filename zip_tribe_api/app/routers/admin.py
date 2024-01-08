from fastapi import APIRouter

name = "admin"
router = APIRouter(
    prefix="/" + name,
    tags=[name],
    dependencies=[],
    responses={
        404: {"description": "Not found"}
    },
)


@router.get()
def admin():
    return {"admin": "admin"}