import os
import hashlib
import base64
import requests
from flask import Flask, render_template, request, redirect, url_for, session
from cryptography.fernet import Fernet
from datetime import datetime
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.secret_key = "supersecretkey"

UPLOAD_FOLDER = "secure_storage"
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# -------------------------
# HELPER FUNCTIONS
# -------------------------

def get_age_band(dob):
    today = datetime.today()
    age = today.year - dob.year - ((today.month, today.day) < (dob.month, dob.day))
    
    if 18 <= age <= 25: return "18-25"
    if 26 <= age <= 35: return "26-35"
    if 36 <= age <= 45: return "36-45"
    if 46 <= age <= 60: return "46-60"
    return "60+"

def calculate_premium(age_band, tier, option):
    base_rates = {
        "18-25": 500,
        "26-35": 800,
        "36-45": 1200,
        "46-60": 1800,
        "60+": 2500
    }

    tier_multiplier = {
        "Bronze": 1,
        "Silver": 1.5,
        "Gold": 2
    }

    option_multiplier = 1.3 if option == "Premium" else 1

    return round(base_rates[age_band] *
                 tier_multiplier[tier] *
                 option_multiplier)

# -------------------------
# ROUTES
# -------------------------

@app.route("/")
def cover():
    return render_template("cover.html")

@app.route("/details", methods=["POST"])
def details():
    session["contact"] = request.form["contact"]
    return render_template("details.html")

@app.route("/cover_select", methods=["POST"])
def cover_select():
    session["fullname"] = request.form["fullname"]
    session["dob"] = request.form["dob"]
    return render_template("cover_select.html")

@app.route("/upload", methods=["POST"])
def upload():
    session["tier"] = request.form["tier"]
    session["option"] = request.form["option"]
    return render_template("upload.html")

@app.route("/calculate", methods=["POST"])
def calculate():

    if "consent" not in request.form:
        return "Consent Required"

    file = request.files["medical"]
    file_data = file.read()

    file_hash = hashlib.sha256(file_data).hexdigest()
    encrypted_path = os.path.join(UPLOAD_FOLDER, file_hash + ".enc")

    if os.path.exists(encrypted_path):
        return "Duplicate Document Detected"

    key = Fernet.generate_key()
    cipher = Fernet(key)
    encrypted_data = cipher.encrypt(file_data)

    with open(encrypted_path, "wb") as f:
        f.write(encrypted_data)

    dob = datetime.strptime(session["dob"], "%Y-%m-%d")
    age_band = get_age_band(dob)

    premium = calculate_premium(age_band,
                                session["tier"],
                                session["option"])

    session["premium"] = premium

    return render_template("payment.html", premium=premium)

@app.route("/pay", methods=["POST"])
def pay():

    premium = session.get("premium")

    # Safaricom Daraja Sandbox
    consumer_key = os.getenv("CONSUMER_KEY")
    consumer_secret = os.getenv("CONSUMER_SECRET")

    token_url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
    response = requests.get(token_url, auth=(consumer_key, consumer_secret))
    access_token = response.json()["access_token"]

    stk_url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"

    payload = {
        "BusinessShortCode": "174379",
        "Password": "GENERATED_PASSWORD",
        "Timestamp": datetime.now().strftime("%Y%m%d%H%M%S"),
        "TransactionType": "CustomerPayBillOnline",
        "Amount": premium,
        "PartyA": session["contact"],
        "PartyB": "174379",
        "PhoneNumber": session["contact"],
        "CallBackURL": "https://yourdomain.com/callback",
        "AccountReference": "MalkiaPlus",
        "TransactionDesc": "Policy Payment"
    }

    headers = {"Authorization": f"Bearer {access_token}"}

    requests.post(stk_url, json=payload, headers=headers)

    return "STK Push Sent Successfully!"

if __name__ == "__main__":
    app.run(debug=True)