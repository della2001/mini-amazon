from my_app import db

class Cart(db.Model):
    # __tablename__ = 'Cart'
<<<<<<< HEAD
=======
    id = db.Column(db.Integer, primary_key=True)
>>>>>>> 6d6e7f864466f23ba6be96684316bccd58777038
    item_id = db.Column(db.Integer, db.ForeignKey('item.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    count = db.Column(db.String(100))
    
    def __init__(self, item_id, user_id, count):
        self.item_id = item_id
        self.user_id = user_id
        self.count = count

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()