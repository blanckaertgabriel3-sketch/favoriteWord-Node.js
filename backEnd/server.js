const express = require("express");
const pool = require("./pool");
const users = require("./routes/users");

const port = process.env.PORT || 5000;
const app = express();

app.use("/users", users);

pool.getConnection((err, connexion) => {
	if(err) {	
		console.log("connexion impossible");
		process.exit(1);
	}
	connexion.release();
	console.log("Connected to db");
	app.listen(port, () => {
	  console.log("Server is open");
	});
})