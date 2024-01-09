from fastapi.testclient import TestClient

from ..main import app

client = TestClient(app)


# common variables
valid_username_1 = "testuser123"
basic_invalid_username_1 = "FUCKHEAD123"
basic_invalid_username_2 = "MATT420"
valid_dob_1 = "20-10-2000"
basic_invalid_dob_1 = "20-10-3000"
basic_invalid_dob_2 = "01-01-1900"
basic_invalid_dob_3 = "01-ab-2000"
valid_email_1 = "test@ziptribe.net"
basic_invalid_email_1 = "Not An Email"
basic_invalid_email_2 = "Nospace"
valid_zipcode = "67209"
basic_invalid_zipcode = "6720b"
valid_password = "The#Pass123@"
basic_invalid_password_1 = "password"
basic_invalid_password_2 = "KJexHik1"

def test_new_user_invalid_email():
    response = client.post(
        "/signup",
        json={
            "username": "testuser123",
            "email": "NOT_AN_EMAIL",
            "password": "password",
            "first_name": "Test",
            "last_name": "User",
            "dob": "2000-01-01",
        },
    )
    assert response.status_code == 400
    assert response.json() == {"detail": "Invalid email address"}


def test_new_user_invalid_dob():
    response = client.post(
        "/signup",
        json={
            "username": "testuser123",
            "email": "valid@test.com",
            "password": "password",
            "first_name": "Test",
            "last_name": "User",
            "dob": "NOT_A_DATE",
        },
    )
    assert response.status_code == 400
    assert response.json() == {"detail": "Invalid date of birth"}


def test_new_user():
    response = client.post(
        "/signup",
        json={
            "username": "testuser123",
            "email": "test@test.com",
            "password": "password123!@#",
            "first_name": "Test",
            "last_name": "User",
            "dob": "2000-01-01",
        },
    )
    # TODO: fix this
    assert response.status_code == 201