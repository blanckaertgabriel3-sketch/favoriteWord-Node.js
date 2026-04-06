const express = require("express");
const pool = require("./pool");
const users = require("./routes/users");
const login = require("./routes/login");
const cors = require("cors");

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use("/users", users);
app.use("/login", login);

pool.getConnection((err, connexion) => {
	if(err) {	
		console.log("connection impossible" + err);
		process.exit(1);
	}
	connexion.release();
	console.log("Connected to db");
	app.listen(port, () => {
	  console.log("Server is open");
	});
})