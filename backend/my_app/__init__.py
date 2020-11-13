# from app.item.views import item_blueprint
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root@localhost/mini_amazon'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# this config should be later changed
# skip username and password etc, just use root cuz it's not productio lol
db = SQLAlchemy(app)
db.create_all()

# TODO write some scripts for adding new data
# ex) feel free to use item/models.py for reference. 

from my_app.user.views import user_blueprint    
app.register_blueprint(user_blueprint)
from my_app.item.views import item_blueprint
app.register_blueprint(item_blueprint)
# app.register_blueprint(item_blueprint)
