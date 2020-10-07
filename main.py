from flask import Flask
app = Flask(__name__)

@app.route('/')
def main():
    return 'Landing Page'

@app.route('/login')
def login():
    return 'Login'