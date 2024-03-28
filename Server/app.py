from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydatabase.db' # Placeholder URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False # Removes warning
db = SQLAlchemy(app)

class Item(db.Model):
    _id = db.Column("id", db.Integer, primary_key=True) # Gives each user a unique ID
    site = db.Column(db.String(100))
    url = db.Column(db.String(100))
    user = db.Column(db.String(100))
    password = db.Column(db.String(100))
    notes = db.Column(db.String(100))

    def __repr__(self):
        # return '<Item %r>' % self.user
        return f"Item('{self.site}', '{self.url}', '{self.user}', '{self.password}', '{self.notes}')"

with app.app_context():
    db.create_all()

# Nothing
@app.route('/')
def home():
    if request.method == 'GET':
        # Load Data
        return jsonify({"success": True, "response": "Hello World"}), 200 # 200 is the status code for "OK

# Get all items
@app.route('/items', methods=['GET'])
def get_items():
    items = Item.query.all()
    if items is None:
        return jsonify({"success": False, "response": "No items found"}), 404
    else:
        item_list = []
        item_list = [{"id": item._id, "site": item.site, "url": item.url, "user": item.user, "password": item.password, "notes": item.notes} for item in items]
        return jsonify({"success": True, "response": item_list})

# Add an item
@app.route('/items', methods=['POST'])
def add_item():
    try:
        site = request.json.get('site')
        url = request.json.get('url')
        user = request.json.get('user')
        password = request.json.get('password')
        notes = request.json.get('notes')
        if not all([site, url, user, password, notes]):
            return jsonify({"success": False, "response": "Missing required data"}), 400
        item = Item(site=site, url=url, user=user, password=password, notes=notes)
        db.session.add(item)
        db.session.commit()
        print(item)
        print(db.session.query(Item).all())
        return jsonify({"success": True, "response": "Item added"}), 201
    except Exception as e:
        app.logger.error(f"Failed to add item: {e}")
        return jsonify({"success": False, "response": "Failed to add item"}), 500

# Delete an item
@app.route('/itemsD', methods=['POST'])
def remove_item():
    try:
        site = request.json.get('site')
        if not site:
            return jsonify({"success": False, "response": "Missing required data"}), 400
        item = Item.query.filter_by(site=site).first()
        if item is None:
            return jsonify({"success": False, "response": "Item not found"}), 404
        db.session.delete(item)
        db.session.commit()
        return jsonify({"success": True, "response": "Item removed"}), 200
    except Exception as e:
        app.logger.error(f"Failed to remove item: {e}")
        return jsonify({"success": False, "response": "Failed to remove item"}), 500

# Update an item
@app.route('/itemsU', methods=['POST'])
def update_item():
    try:
        _id = request.json.get('id')
        site = request.json.get('site')
        url = request.json.get('url')
        user = request.json.get('user')
        password = request.json.get('password')
        notes = request.json.get('notes')
        if not all([site, url, user, password, notes]):
            return jsonify({"success": False, "response": "Missing required data"}), 400
        item = Item.query.filter_by(_id=id).first()
        if item is None:
            return jsonify({"success": False, "response": "Item not found"}), 404
        item.site = site
        item.url = url
        item.user = user
        item.password = password
        item.notes = notes
        db.session.commit()
        return jsonify({"success": True, "response": "Item updated"}), 200
    except Exception as e:
        app.logger.error(f"Failed to update item: {e}")
        return jsonify({"success": False, "response": "Failed to update item"}), 500


if __name__ == '__main__':
    app.run(debug=True)


