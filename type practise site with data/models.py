from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    typing_speed = db.Column(db.Float, default=0)
    accuracy = db.Column(db.Float, default=0)
    
    def __repr__(self):
        return f"<User {self.username}>"

class TypingTestResult(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    words_per_minute = db.Column(db.Float)
    accuracy = db.Column(db.Float)
    date = db.Column(db.DateTime, default=datetime.utcnow)
    
    def __repr__(self):
        return f"<TypingTestResult {self.words_per_minute} WPM>"
