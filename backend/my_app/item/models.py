from my_app import db

class Item(db.Model):
    __tablename__ = 'Item'
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(100))
    name = db.Column(db.String(50))
    price = db.Column(db.Float)
    category = db.Column(db.Integer)
    image = db.Column(db.String(100))
    description = db.Column(db.String(10))
    rating = db.relationship("Rating")


    def __init__(self, url, name, price, category, image, description):
        self.url = url
        self.name = name
        self.price = price
        self.category = category; 
        self.image = image;
        self.description = description

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


class Rating(db.Model):
    __tablename__ = 'Rating'
    id = db.Column(db.Integer, primary_key=True)
    item_id = db.Column(db.Integer, db.ForeignKey('Item.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('User.id'))
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