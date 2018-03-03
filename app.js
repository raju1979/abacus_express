const express = require("express");
const dotenv = require("dotenv").config();
const cors = require('cors')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
//configure app for body-bodyParser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const { validateBody, schemas } = require('./helpers/routeHelpers');


const PORT = process.env.PORT || 5007;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_STRING)
	.then((data) => {
		console.log('connected');
	})

app.use('/api/user',require('./routes/user'));

app.listen(PORT, () => {
	console.log(`App running on PORT ${PORT}`);
})