from flask import Flask, redirect, url_for, session, request
from authlib.integrations.flask_client import OAuth
from flask_cors import CORS
from urllib.parse import urlencode
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app, supports_credentials=True)

app.secret_key = os.getenv('FLASK_SECRET_KEY')

# Auth0 configuration
oauth = OAuth(app)
auth0 = oauth.register(
    'auth0',
    client_id=os.getenv('AUTH0_CLIENT_ID'),
    client_secret=os.getenv('AUTH0_CLIENT_SECRET'),
    api_base_url=os.getenv('AUTH0_DOMAIN'),
    access_token_url=f"{os.getenv('AUTH0_DOMAIN')}/oauth/token",
    authorize_url=f"{os.getenv('AUTH0_DOMAIN')}/authorize",
    client_kwargs={'scope': 'openid profile email'},
)

@app.route('/')
def home():
    return "Hello, World!"

@app.route('/login')
def login():
    return auth0.authorize_redirect(redirect_uri=os.getenv('AUTH0_CALLBACK_URL'))

@app.route('/callback')
def callback():
    # Exchange authorization code for tokens
    token = auth0.authorize_access_token()
    # You can also extract other information from the token as needed
    # For example, `id_token` can be retrieved and added if needed
    access_token = token.get('access_token')

    # Assuming you have an environment variable for your frontend URL
    frontend_url = os.getenv('FRONTEND_URL')

    # Construct the URL with tokens as query parameters
    redirect_url = f"{frontend_url}/account?access_token={access_token}"
    
    # Optionally, add more tokens or information as needed
    # redirect_url += f"&id_token={token.get('id_token')}"

    return redirect(redirect_url)

@app.route('/dashboard')
def dashboard():
    return 'You are logged in'

@app.route('/logout')
def logout():
    session.clear()
    params = {'returnTo': url_for('home', _external=True), 'client_id': os.getenv('AUTH0_CLIENT_ID')}
    return redirect(auth0.api_base_url + '/v2/logout?' + urlencode(params))

if __name__ == "__main__":
    app.run(debug=True)
