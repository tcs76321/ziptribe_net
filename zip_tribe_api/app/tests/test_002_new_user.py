from fastapi.testclient import TestClient

from ..main import app

client = TestClient(app)


def test_new_user():
    response = client.post(
        "/signup",
        json={
            "username": "testuser123",
            "email": "test@test.com",
            "password": "password",
            "first_name": "Test",
            "last_name": "User",
            "dob": "2000-01-01",
        },
    )
    # TODO: fix this
    assert response.status_code == 201