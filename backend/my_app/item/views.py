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
        brand = request.json["brand"]

        new_item = Item(url, name,  price, category,
                            image, description, brand)
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
    
        
Item_view = ItemView.as_view('item_view')

app.add_url_rule(
    '/item/', view_func=Item_view, methods=['POST']
)
app.add_url_rule(
    '/item/<int:id>', view_func=Item_view, methods=['GET']
)
app.add_url_rule(
    '/item/delete/<int:id>', view_func=Item_view, methods=['DELETE']
)

@app.route('/items/all')
def get_all_items():
    print("getting all the items")
    items = Item.query.all()
    result = []
    for item in items:
        result.append(
            {
                "item_id": item.id, 
                "url": item.url, 
                "name": item.name, 
                "price": item.price,
                "category": item.category, 
                "image": item.image, 
                "description": item.description, 
                "brand": item.brand
            }
        )

    return jsonify(result)

rating_blueprint = Blueprint('rating', __name__)

class RatingView(MethodView):
    def post(self):
        print("posting a item")
        print("request", request.json)

        user_id = request.json['user_id']
        item_id = request.json['item_id']
        rating = request.json['rating']
        
        new_rating = Rating(user_id, item_id, rating)

        return jsonify({
            'result': True
        })

Item_view = ItemView.as_view('rating_view')

app.add_url_rule(
    '/rating/', view_func=Item_view, methods=['POST']
)


@app.route('/search/<string:item_name>')
def search_by_name(item_name):
    print("searching for item with item_name:", item_name)
    # TODO write logic here
    search = "%{}%".format(item_name)
    items = Item.query.filter(Item.name.like(search)).all()
    result = []
    for item in items:
        result.append(
            {
                "item_id": item.id, 
                "url": item.url, 
                "name": item.name, 
                "price": item.price,
                "category": item.category, 
                "image": item.image, 
                "description": item.description, 
                "brand": item.brand
            }
        )
    return jsonify(result)

    