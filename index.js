// module imports
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3');
const Sequelize = require('sequelize');
const app = express();
const router = express.Router();

// use json format for req body
app.use(bodyParser.json())

// connect to db
const sequelize = new Sequelize('Music', 'isaac', null, {
    host: 'localhost',
    dialect: 'sqlite',
    storage: '/Users/isaacgrey/Desktop/js-backend2/Chinook_Sqlite_AutoIncrementPKs.sqlite'
});

// define schema
const Artist = sequelize.define('Artist', {
      ArtistId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Name: Sequelize.STRING
},
{
    freezeTableName: true,
    timestamps: false
})

// run server on port 3000
app.listen(3000, () => {
    console.log('server running')
})

module.exports = Artist;