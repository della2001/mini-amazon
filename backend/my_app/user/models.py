from my_app import db


class User(db.Model):
    # __tablename__ = 'User'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    username = db.Column(db.String(10))
    password = db.Column(db.String(10))

    def __init__(self, name, username, password, is_buyer, address, is_seller):
        self.name = name
        self.username = username
        self.password = password
        if is_buyer:
            print("reached user")
            Buyer(self.id, address)
        if is_seller:
            print("reached seller")
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

class Product(db.Model):
    productid = db.Column(db.Integer, primary_key=True)
    productname = db.Column(db.String(50))
    category = db.Column(db.String(10))
    price = db.Column(db.Integer)
    imageUrl = db.Column(db.String(100))
    description = db.Column(db.String(100))

class Cart(db.Model):
    userid = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
    productid = db.Column(db.Integer, db.ForeignKey('product.productid'), primary_key=True)
    quantity = db.Column(db.Integer)
