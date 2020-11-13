from flask import request, jsonify, Blueprint
from flask.views import MethodView
from my_app import db, app
from my_app.item.models import Item, Rating

cart_blueprint = Blueprint('cart', __name__)

class CartView(MethodView):
    def get(self, id):
        print("implement")
    def post(self):
        print("implement")
    def delete(self, id):
        print("implement")

    
