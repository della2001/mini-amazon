from flask import request, jsonify, Blueprint
from flask.views import MethodView
from my_app import db, app
from my_app.order.models import Order
from my_app.item.models import Item

order_blueprint = Blueprint('order', __name__)

class OrderView(MethodView):
    def get(self, id):
        order_history = Order.query.filter_by(id=id).all()
        result = []
        for order in order_history:
            result.append(
            {
                "item_id": order.item_id,
                "user_id": order.user_id, 
                "item_name": order.item_name, 
                "item_price": order.item_price,
                "count": order.count, 
                "order_time": order.order_time
            }
        )
        return jsonify(result)

    def post(self):
        
        user_id= request.json['user_id']
        item_id= request.json['item_id']
        count = request.json['count']
       
        item = Item.query.filter_by(id=item_id).first()
        item_name = item.name
        item_price = item.price
        
        new_order = Order(item_id, user_id, item_name, item_price, count)
        db.session.add(new_order)
        db.session.commit()
        response = {
                'result': True
            }
        return jsonify(response)


Order_view = OrderView.as_view('order_view')

app.add_url_rule(
    '/order/', view_func=Order_view, methods=['POST']
)
app.add_url_rule(
    '/order/<int:id>', view_func=Order_view, methods=['GET']
)
