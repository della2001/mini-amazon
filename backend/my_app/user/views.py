import pdb

from flask import request, jsonify, Blueprint
from flask.views import MethodView
from my_app import db, app
from my_app.user.models import User

user_blueprint = Blueprint('user', __name__)

@user_blueprint.route('/')
@user_blueprint.route('/home')
def home():
    return "Welcome to the library Home."


class UserView(MethodView):

    def get(self, user_id):

        user = User.query.filter_by(id=user_id).first()
        response = {
            'username': user.username,
            'password': user.password,
            'name': user.name
        }
        return jsonify(response)

    def post(self):
        print("posting a user")
        print("request", request.json)
        name = request.json['name']
        username = request.json["username"]
        exit_user = User.query.filter_by(username=username).first()
        if not exit_user:
            print("should reach here")
            password = request.json["password"]
            is_buyer = request.json["is_buyer"]
            address = request.json["address"]
            is_seller = request.json["is_seller"]
            new_user = User(name, username, password, is_buyer, address, is_seller)
            db.session.add(new_user)
            db.session.commit()
            return jsonify({
                'user_id': new_user.id,
                'name': new_user.name,
                'username': new_user.username,
            })
        else:
            response = {
                'message': 'User already exists. Please login.'
            }

        return jsonify(response)

    def delete(self, id):

        user = User.query.filter_by(id=id).first()
        if user:
            user.delete()
            return jsonify({'msg': 'user deleted'})
        else:
            return jsonify({'msg': 'user not found'})


User_view = UserView.as_view('user_view')

app.add_url_rule(
    '/registration/', view_func=User_view, methods=['POST']
)
app.add_url_rule(
    '/user/<int:id>', view_func=User_view, methods=['GET']
)
app.add_url_rule(
    '/deleteuser/<int:id>', view_func=User_view, methods=['DELETE']
)
