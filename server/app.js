const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session  = require("express-session");
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy;
const PORT = process.env.PORT || 9090;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/v1', require('./routes/stocks.router'));

const dbConnection = require('./helpers/mongo_conn.helper');
dbConnection.mongodbConnection();

app.listen(PORT, () => {
	console.log(`Server is running on  Port 9090`);
});