from my_app import db

class Cart(db.Model):
    __tablename__ = 'Cart'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Integer, primary_key=True)

    def __init__(self, name):
        self.name = name
    
    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
