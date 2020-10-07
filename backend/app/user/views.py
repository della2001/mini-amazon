import json
from flask import request, jsonify, Blueprint, abort
from flask.views import MethodView
from flask import make_response
from app import app, db
from app.user.models import User
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
        name = request.form.get('name')
        username = request.form.get('username')
        exit_user = User.query.filter_by(username=username).first()
        if not exit_user:
            password = request.form.get('password')
            is_buyer = request.form.get('is_buyer')
            address = request.form.get('address')
            is_seller = request.form.get('is_seller')

            new_user = User(name, username, password,
                            is_buyer, address, is_seller)
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
