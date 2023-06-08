const mongoose = require('mongoose');
const {db} = require('./mongoose.js')

// Mongoose Schema for User Collection

const UserSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    MiddleName: {
        type: String,
        required: false
    },
    LastName: {
        type: String,
        required: true
    },
    UserID: {
        type: String,
        required: true
    },
    UserGender: {
        type: String,
        required: true
    },
    UserAge: {
        type: String,
        required: true
    },
    UserPhone: {
        type: Number,
        required: true
    },
    UserEmail: {
        type: String,
        required: true
    },
    UserPassword: {
        type: String,
        required: true
    }
})


//  Mongoose Schema for Tweets Collection


const TweetsSchema = new mongoose.Schema({
    UserID: {
        type: String,
        required: true
    },
    TweetMessage: {
        type: String,
        required: true
    },
    TweetID: {
        type: Number,
        required: true
    },
    TweetDate: {
        type: Number,
        required: true
    } 
})

module.exports = {
    User : db.model('User',UserSchema,'USERS'),
    Tweets : db.model('Tweets',TweetsSchema,'TWEETS')
}