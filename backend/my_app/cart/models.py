from my_app import db

class Cart(db.Model):
    # __tablename__ = 'Cart'
    id = db.Column(db.Integer, primary_key=True)
    iname = db.Column(db.String(50)) #itemname
    sname = db.Column(db.String(50)) #sellername
    image = db.Column(db.String(100))
    price = db.Column(db.Float)
    count = db.Column(db.Integer)
    #removebutton?
    total = db.Column(db.Float)
    #checkoutbutton?

    def __init__(self, iname, sname, image, price, count, total):
        self.iname = iname
        self.sname = sname
        self.image = image
        self.price = price
        self.count = count
        self.total = total
    
    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
