from fastapi import APIRouter

router = APIRouter()


# TODO: finish this
@router.get("/profile", tags=["profile"])
def read_user_profile():
    # get the current user
    # return the user's profile
    return {"username": "YOUR USERNAME HERE"}


# TODO: finish this
@router.get("/profile/{username}", tags=["profile"])
def read_user_profile(username: str):
    return {"username": username}
