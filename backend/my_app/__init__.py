from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql.schema import Column, ForeignKey, MetaData, Table
from sqlalchemy.types import Integer, String
from sqlalchemy.engine import create_engine

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# changed port to 5678 to avoid conflict
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root@localhost:5678/mini_amazon'
# this config should be later changed
# skip username and password etc, just use root cuz it's not production lol

db = SQLAlchemy(app)

from my_app.user.models import User
from my_app.item.models import Item
from my_app.cart.models import Cart
from my_app.order.models import Order

db.create_all()

# Some scripts for adding initial data
from my_app.item.models import Item
import csv

counter = 0
max_items = 50

# with open('small_data.csv', newline='') as csvfile:
with open('amazon_data.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        url = row['product_url']
        name = row['product_name']
        # truncate the string cuz idk why the names are so long...
        name = name[0:150]
        price = row['price']
        category = row['category']
        image = row['image']
        description = row['description']
        brand = row['brand']
        new_item = Item(url, name, price, category, image, description, brand)
        db.session.add(new_item)
        db.session.commit()
        print("this is the added item name and number: ", name, new_item)

        counter += 1
        if counter == max_items:
            break

from my_app.user.views import user_blueprint    
app.register_blueprint(user_blueprint)
from my_app.item.views import item_blueprint
app.register_blueprint(item_blueprint)
from my_app.item.views import rating_blueprint
app.register_blueprint(rating_blueprint)
from my_app.cart.views import cart_blueprint 
app.register_blueprint(cart_blueprint)
from my_app.order.views import order_blueprint
app.register_blueprint(order_blueprint)