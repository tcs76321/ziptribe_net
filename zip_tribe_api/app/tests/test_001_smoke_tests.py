from fastapi.testclient import TestClient

from ..main import app

client = TestClient(app)


def test_truth_is_true():
    assert True
    assert not False


def test_login_no_auth():
    response = client.get("/login")
    assert response.status_code != 200
    # assert response.status_code == 401
