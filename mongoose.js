const mongoose = require('mongoose');

const con = mongoose.createConnection('mongodb+srv://user1:PAnKAkpI6VnCuPcR@cluster0.7jaef.mongodb.net/?retryWrites=true&w=majority')


const db = con.useDb('EXPRESS')

module.exports = { db }