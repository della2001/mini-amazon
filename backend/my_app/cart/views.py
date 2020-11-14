from flask import request, jsonify, Blueprint
from flask.views import MethodView
from my_app import db, app
from my_app.cart.models import Cart

cart_blueprint = Blueprint('cart', __name__)

class CartView(MethodView):
    def get(self, id):
        cart = Cart.query.filter_by(id=id).first()
        response = {
            'cart_id': cart.cart_id,
            'image': cart.image,
            'item_name': cart.iname, 
            'seller_name':cart.sname,
            'price': cart.price,
            'count': cart.count,
            'total': cart.total
        }
        return jsonify(response)
   
    def post(self):
        print("posting a cart")
        print("request", request.json)
        iname = request.json['item_name']
        sname = request.json['seller_name']
        image = request.json["image"]
        price = request.json["price"]
        count = request.json["count"]
        total = request.json["total"]

        new_cart = Cart(iname, sname,  image, price,
                            count, total)
        db.session.add(new_cart)
        db.session.commit()
        return jsonify({
                'cart_ids': new_cart.id
            })
    def delete(self, id):
        cart = Cart.query.filter_by(id=id).first()
        if cart:
            Cart.delete()
            return jsonify({'msg': 'cart deleted'})
        else:
            return jsonify({'msg': 'cart not found'})

Cart_view = CartView.as_view('cart_view')

app.add_url_rule(
    '/registration/', view_func=Cart_view, methods=['POST']
)
app.add_url_rule(
    '/user/<int:id>', view_func=Cart_view, methods=['GET']
)
app.add_url_rule(
    '/deleteuser/<int:id>', view_func=Cart_view, methods=['DELETE']
)
