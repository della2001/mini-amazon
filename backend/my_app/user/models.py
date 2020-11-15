from my_app import db

class User(db.Model):
    # __tablename__ = 'User'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    username = db.Column(db.String(10))
    password = db.Column(db.String(10))
    rating = db.relationship("Rating", backref='user', lazy=True)
    user_id = db.relationship("Cart", backref='user', lazy=True)
    user_id = db.relationship("Order", backref='user', lazy=True)


    def __init__(self, name, username, password, is_buyer, address, is_seller):
        self.id = 4
        self.name = name
        self.username = username
        self.password = password
        if is_buyer:
            print("reached here")
            Buyer(self.id, address)
        if is_seller:
            print("reached here")
            Seller(self.id)

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


class Buyer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),
                        nullable=False)
    shipping_address = db.Column(db.String(100))

    def __init__(self, user_id, address):
        self.user_id = user_id
        self.address = address

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


class Seller(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),
                        nullable=False)
    rating = db.Column(db.Integer)

    def __init__(self, user_id):
        self.user_id = user_id
        self.rating = 0
        # rating starts at 0

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
