
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydatabase.db' # Placeholder URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False # Removes warning
db = SQLAlchemy(app)
CORS(app)

class Item(db.Model):
    _id = db.Column("id", db.Integer, primary_key=True) # Gives each user a unique ID
    email = db.Column(db.String(100))

    def __repr__(self):
        return '<Item %r>' % self.email

@app.route('/')
def home():
    if request.method == 'GET':
        # Load Data
        return "temp"


@app.route('/items', methods=['POST'])
def add_item():
    email = request.json['email']
    item = Item(email=email)
    db.session.add(item)
    db.session.commit()
    return jsonify({"success": True, "response": "Item added"}), 201 # 201 is the status code for created

@app.route('/items', methods=['GET'])
def get_items():
    items = Item.query.all()
    item_list = []
    for item in items:
        item_list.append({"email": item.email})
    return jsonify({"success": True, "response": item_list})

if __name__ == '__main__':
    db.create_all()
    app.run(debug=False)
