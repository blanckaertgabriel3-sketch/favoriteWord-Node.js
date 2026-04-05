const express = require("express");
const mysql = require("mysql");
const port = process.env.PORT || 5000;

const app = express();

const connexion = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'favoriteword'
});
connexion.connect((err) => {
	if(err) {
		console.error("mysql connection error : " + err.stack);
		return;
	}
	console.log("Connected to myql");
})

app.get("/", (req, res) => {
	res.status(200).json({
		name: "gariel", 
		age:57,
		id: 789
	});
})
const users = require("./routes/users");
app.use("/users", users);

app.listen(port, () => {
	console.log("Server is open");
})
