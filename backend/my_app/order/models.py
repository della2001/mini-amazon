from my_app import db
import datetime

def _get_date():
    return datetime.datetime.now()
    
class Order(db.Model):
    # __tablename__ = 'order'

    item_id = db.Column(db.Integer, db.ForeignKey('item.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    item_name = db.Column(db.String(200))
    item_price = db.Column(db.Float)
    count = db.Column(db.Integer)
    order_time = db.Column(db.Date, default=_get_date)

    def __init__(self, item_id, user_id, name, price, count):
        self.item_id = item_id
        self.user_id = user_id
        self.item_name = name
        self.item_price = price
        self.count = count

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()