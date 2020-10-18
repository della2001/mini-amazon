from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:''@localhost/flaskcodeloop'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# this config should be later changed 
# skip username and password etc
db = SQLAlchemy(app)

from app.user.views import user_blueprint
#from app.item.views import item_blueprint

app.register_blueprint(user_blueprint)
#app.register_blueprint(item_blueprint)

