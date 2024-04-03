from flask import Flask, redirect, url_for, session
from authlib.integrations.flask_client import OAuth
from flask_cors import CORS
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

app = Flask(__name__)
# Enable CORS
CORS(app, supports_credentials=True)

# Set the secret key for session management
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

# Controllers API
@app.route('/')
def home():
    return "Hello, World!"

@app.route('/login')
def login():
    # Redirect to Auth0 login page
    return auth0.authorize_redirect(redirect_uri=os.getenv('AUTH0_CALLBACK_URL'))

@app.route('/callback')
def callback():
    # Handle the response from Auth0
    auth0.authorize_access_token()
    resp = auth0.get('userinfo')
    userinfo = resp.json()

    # Store the user information in Flask session.
    session['jwt_payload'] = userinfo
    session['profile'] = {
        'user_id': userinfo['sub'],
        'name': userinfo['name'],
        'picture': userinfo['picture']
    }

    # Redirect directly to the /account page using an environment variable
    redirect_url = os.getenv('FRONTEND_URL') + '/account'
    return redirect(redirect_url)


@app.route('/dashboard')
def dashboard():
    return 'You are logged in'

@app.route('/logout')
def logout():
    # Clear the session and redirect to logout URL
    session.clear()
    params = {'returnTo': url_for('home', _external=True), 'client_id': os.getenv('AUTH0_CLIENT_ID')}
    return redirect(auth0.api_base_url + '/v2/logout?' + urlencode(params))

if __name__ == "__main__":
    app.run(debug=True)  # Switch debug=False in production
