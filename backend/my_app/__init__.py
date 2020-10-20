# from app.item.views import item_blueprint
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root@localhost/mini_amazon'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# this config should be later changed
# skip username and password etc, just use root cuz it's not productio lol
db = SQLAlchemy(app)
with app.app_context():
    db.create_all()

from my_app.user.views import user_blueprint
app.register_blueprint(user_blueprint)
# app.register_blueprint(item_blueprint)
