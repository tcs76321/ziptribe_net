from fastapi import FastAPI
from fastapi.testclient import TestClient

app = FastAPI()


@app.get("/")
async def read_main():
    return {"msg": "Hello World"}


client = TestClient(app)


def test_login_fail():
    response = client.get("/login")
    assert response.status_code == 404
    assert response.json() == {"msg": "Hello World"}