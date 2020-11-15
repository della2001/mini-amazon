from flask import request, jsonify, Blueprint
from flask.views import MethodView
from my_app import db, app
from my_app.cart.models import Cart

cart_blueprint = Blueprint('cart', __name__)

class CartView(MethodView):
    def get(self, user_id):
<<<<<<< HEAD
        cart = Cart.query.filter_by(user_id=user_id).all() # this will get all the items in the cart for userA 
        return jsonify(cart)
=======
        items = Cart.query.filter_by(user_id=user_id).all() # this will get all the items in the cart for userA 
        result = []
        for item in items:
            result.append(
            {
                "id": item.id, 
                "item_id": item.item_id, 
                "user_id": item.user_id, 
                "count": item.count
            }
        )

        return jsonify(result)
>>>>>>> 6d6e7f864466f23ba6be96684316bccd58777038
   
    def post(self):
        item_id= request.json['item_id']
        user_id= request.json['user_id']
        count = request.json["count"]
        new_cart = Cart(item_id, user_id, count)
        db.session.add(new_cart)
        db.session.commit()
        return jsonify({
                'result': True
            })
    def delete(self, item_id):
        row = Cart.query.filter_by(item_id = item_id).first()
        row.delete()

Cart_view = CartView.as_view('cart_view')
app.add_url_rule(
    '/cart', view_func=Cart_view, methods=['POST']
)
app.add_url_rule(
    '/cart/<int:user_id>', view_func=Cart_view, methods=['GET']
)