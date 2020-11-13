from flask import request, jsonify, Blueprint
from flask.views import MethodView
from my_app import db, app
from my_app.item.models import Item, Rating

item_blueprint = Blueprint('item', __name__)

class ItemView(MethodView):
    def get(self, id):
        item = Item.query.filter_by(id=id).first()
        ratings = Rating.query.filter_by(item_id=id).all()
        sum = 0;
        for rating in ratings:
            sum += rating
        rating = sum/len(ratings)

        response = {
            'item_id': item.item_id,
            'image': item.image,
            'name': item.name, 
            "price": item.price,
            "description": item.description,
            "rating": rating
        }
        return jsonify(response)
    def post(self):
        print("posting a item")
        print("request", request.json)
        name = request.json['name']
        image = request.json["image"]
        url = request.json["url"]
        price = request.json["price"]
        description = request.json["description"]
        category = request.json["category"]

        new_item = Item(url, name,  price, category,
                            image, description)
        db.session.add(new_item)
        db.session.commit()
        return jsonify({
                'item_ids': new_item.id
            })
    def delete(self, id):
        item = Item.query.filter_by(id=id).first()
        if item:
            item.delete()
            return jsonify({'msg': 'item deleted'})
        else:
            return jsonify({'msg': 'item not found'})
    
    def search(self, item_name):
        print("searching for item")
        # TODO write logic here
        
Item_view = ItemView.as_view('item_view')

app.add_url_rule(
    '/item/', view_func=Item_view, methods=['POST']
)
app.add_url_rule(
    '/item/<int:id>', view_func=Item_view, methods=['GET']
)
app.add_url_rule(
    '/delete/<int:id>', view_func=Item_view, methods=['DELETE']
)

app.add_url_rule(
    '/search/<string:query>', view_func=Item_view, methods=['GET']
)
