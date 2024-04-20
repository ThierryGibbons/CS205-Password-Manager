from __future__ import print_function # In python 2.7
from flask import Flask, request, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os
import sys

app = Flask(__name__, static_folder='dist')
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydatabase.db' # Placeholder URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False # Removes warning
db = SQLAlchemy(app)

class Item(db.Model):
    _id = db.Column("id", db.Integer, primary_key=True) # Gives each user a unique ID
    userId = db.Column(db.String(100))
    site = db.Column(db.String(100))
    url = db.Column(db.String(100))
    user = db.Column(db.String(100))
    password = db.Column(db.String(100))
    notes = db.Column(db.String(100))

    def __repr__(self):
        # return '<Item %r>' % self.user
        return f"Item('{self.site}', '{self.url}', '{self.user}', '{self.password}', '{self.notes}')"

class User(db.Model):
    _id = db.Column("id", db.Integer, primary_key=True) # Gives each user a unique ID
    userId = db.Column(db.String(100))

    def __repr__(self):
        return f"User('{self.userId}')"


with app.app_context():
    db.create_all()

# Nothing
@app.route('/')
def serve_root():
    return send_from_directory('dist', 'index.html')

@app.route('/<path:path>')
def serve(path):
    if path and os.path.exists(os.path.join(app.static_folder, path)):
        return app.send_static_file(path)
    return send_from_directory('dist', 'index.html')

# Add a user
@app.route('/users', methods=['POST'])
def add_user():
    try:
        userId = request.json.get('userId').strip('"')
        if not userId:
            return jsonify({"success": False, "response": "Missing required data"}), 400
        # Check if user not already in database
        user = User.query.filter_by(userId=userId).first()
        if user is not None:
            return jsonify({"success": False, "response": "User already exists"}), 409
        user = User(userId=userId)
        print('new user: ', user, file=sys.stderr)
        db.session.add(user)
        db.session.commit()
        return jsonify({"success": True, "response": "User added"}), 201
    except Exception as e:
        app.logger.error(f"Failed to add user: {e}")
        return jsonify({"success": False, "response": "Failed to add user"}), 500

# Get all items
@app.route('/getItems', methods=['POST'])
def get_items():
    userId = request.json.get('userId').strip('"')
    print('req userId: ', userId, file=sys.stderr)
    # Check if user exists
    user = User.query.filter_by(userId=userId).first()
    if user is None:
        return jsonify({"success": False, "response": "User not found"}), 404
    itemsB = Item.query.all()
    items = Item.query.filter_by(userId=userId).all()
    if items is None:
        return jsonify({"success": False, "response": "No items found"}), 404
    else:
        item_list = [{"id": item._id, "userId": item.userId, "site": item.site, "url": item.url, "user": item.user, "password": item.password, "notes": item.notes} for item in items]
        item_view = [{"userId": item.userId, "site": item.site} for item in items]
        item_userId = [{itemB.userId} for itemB in itemsB]
        print('-', item_userId, file=sys.stderr) # Check how many times a user is referenced in the system)
        print('item_view: ', item_view, file=sys.stderr)
        return jsonify({"success": True, "response": item_list})

# Add an item
@app.route('/itemsP', methods=['POST'])
def add_item():
    try:
        userId = request.json.get('userId').strip('"')
        print('new: ', userId, file=sys.stderr)
        # Check if user exists
        user = User.query.filter_by(userId=userId).first()
        if user is None:
            return jsonify({"success": False, "response": "User not found"}), 404
        site = request.json.get('site')
        url = request.json.get('url')
        user = request.json.get('user')
        password = request.json.get('password')
        notes = request.json.get('notes')
        if not all([userId, site, url, user, password, notes]):
            return jsonify({"success": False, "response": "Missing required data"}), 400
        item = Item(userId=userId, site=site, url=url, user=user, password=password, notes=notes)
        db.session.add(item)
        db.session.commit()
        return jsonify({"success": True, "response": "Item added"}), 201
    except Exception as e:
        app.logger.error(f"Failed to add item: {e}")
        return jsonify({"success": False, "response": "Failed to add item"}), 500

# Delete an item
@app.route('/itemsD', methods=['POST'])
def remove_item():
    try:
        userId = request.json.get('user')
        # Check if user exists
        user = User.query.filter_by(userId=userId).first()
        if user is None:
            return jsonify({"success": False, "response": "User not found"}), 404
        site = request.json.get('site')
        if not site:
            return jsonify({"success": False, "response": "Missing required data"}), 400
        item = Item.query.filter_by(site=site, userId=userId).first()
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
        userId = request.json.get('userId').strip('"')
        # Check if user exists
        user = User.query.filter_by(userId=userId).first()
        if user is None:
            return jsonify({"success": False, "response": "User not found"}), 404
        _id = request.json.get('id')
        site = request.json.get('site')
        url = request.json.get('url')
        user = request.json.get('user')
        password = request.json.get('password')
        notes = request.json.get('notes')
        if not _id:
            return jsonify({"success": False, "response": "Missing required data"}), 400
        print('failed here', file=sys.stderr)
        item = Item.query.filter_by(_id=_id, userId=userId).first()
        if item is None:
            return jsonify({"success": False, "response": "Item not found"}), 404
        if site:
            item.site = site
        if url:
            item.url = url
        if user:
            item.user = user
        if password:
            item.password = password
        if notes:
            item.notes = notes

        db.session.commit()
        return jsonify({"success": True, "response": "Item updated"}), 200
    except Exception as e:
        app.logger.error(f"Failed to update item: {e}")
        return jsonify({"success": False, "response": "Failed to update item"}), 500


if __name__ == "__main__":
    app.run(debug=True, use_reloader=True, port=5000, threaded=True)


