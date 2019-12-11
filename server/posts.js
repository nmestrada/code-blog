const Sequelize = require('sequelize')
const db = require('./db');

const Posts = db.define('post', {
    author: Sequelize.STRING,
})
