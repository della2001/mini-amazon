from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql.schema import Column, ForeignKey, MetaData, Table
from sqlalchemy.types import Integer, String
from sqlalchemy.engine import create_engine
app = Flask(__name__)
addr = 'mysql://root@localhost/mini_amazon'
app.config['SQLALCHEMY_DATABASE_URI'] = addr
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# this config should be later changed
# skip username and password etc, just use root cuz it's not productio lol

db = SQLAlchemy(app)

from my_app.user.models import User
from my_app.item.models import Item
from my_app.cart.models import Cart

db.create_all()

# Some scripts for adding initial data
from my_app.item.models import Item
import csv
with open('amazon_data.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        url = row['product_url']
        name = row['product_name']
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

from my_app.user.views import user_blueprint    
app.register_blueprint(user_blueprint)
from my_app.item.views import item_blueprint
app.register_blueprint(item_blueprint)
from my_app.cart.views import cart_blueprint 
app.register_blueprint(cart_blueprint)
# add rating and cart
