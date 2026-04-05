const express = require("express");
const port = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
	res.status(200).json({
		name: "gariel", 
		age:57,
		id: 789
	});
})

app.listen(port, () => {
	console.log("Server is oppen");
})
