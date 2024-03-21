from flask import Flask, request
from flask_cors import CORS
import passwordManager

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'GET':
        a = passwordManager.load_data('temp.json')
        print(a)
        return a


if __name__ == '__main__':
    app.run(debug=True)
