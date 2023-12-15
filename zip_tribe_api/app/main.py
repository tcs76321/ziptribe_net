from fastapi import FastAPI

from app.routers import feed, login, profile, signup

app = FastAPI()
app.include_router(feed.router)
app.include_router(login.router)
app.include_router(profile.router)
app.include_router(signup.router)
