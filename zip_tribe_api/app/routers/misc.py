from fastapi import APIRouter

name = "misc"
router = APIRouter(
    prefix="/" + name,
    tags=[name],
    dependencies=[],
    responses={
        404: {"description": "Not found"},
    },
)


# base route, returns a Hello World message, could be used as a honey pot endpoint to detect bots and attacks
@router.get("/", tags=["users"])
def root_route():
    # TODO: implement logging
    # TODO: implement honey pot alarm
    return {"msg": "Hello World"}
