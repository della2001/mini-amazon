from flask import request, jsonify, Blueprint
from flask.views import MethodView
from my_app import db, app
from my_app.user.models import Buyer, Seller, User

user_blueprint = Blueprint('user', __name__)

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
            if is_buyer == True:
                new_buyer = Buyer(new_user.id, address)
                db.session.add(new_buyer)
                db.session.commit()
            if is_seller == True:
                new_seller = Seller(new_user.id)
                db.session.add(new_seller)
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

@app.route('/login/<username>/<password>')
def login(username, password):
    print("login attempted with username, and password as:", username, password)
    user = User.query.filter_by(username= username, password=password).all()
    print(user)
    if len(user) == 0:
        return jsonify({
            "result": False
        })
    else:
        user = user[0]
        print(user)
        return jsonify({
            "user_id": user.id,
            "name": user.name
        })
    # result
    # return jsonify(result)