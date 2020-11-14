from my_app import db

class Item(db.Model):
    # __tablename__ = 'Item'
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(300))
    name = db.Column(db.String(200))
    price = db.Column(db.Float)
    category = db.Column(db.String(50))
    image = db.Column(db.String(200))
    description = db.Column(db.Text)
    brand = db.Column(db.String(100))
    rating = db.relationship("Rating", backref='item', lazy=True)

    def __init__(self, url, name, price, category, image, description, brand):
        self.url = url
        self.name = name
        self.price = price
        self.category = category; 
        self.image = image;
        self.description = description
        self.brand = brand

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


class Rating(db.Model):
    # __tablename__ = 'Rating'
    id = db.Column(db.Integer, primary_key=True)
    item_id = db.Column(db.Integer, db.ForeignKey('item.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    # rating should be any number between 1 to 5
    rating = db.Column(db.Integer)

    def __init__(self, item_id, user_id, rating):
        self.item_id= item_id
        self.user_id = user_id
        self.rating = rating

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()