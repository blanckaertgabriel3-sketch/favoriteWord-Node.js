const express = require("express");
const router = express.Router();
const pool = require("../pool");

router.get("/", (req, res) => {
  pool.query("SELECT * FROM users", (err, rows, fields) => {
    if (err) {
		throw err;
	}
    res.json({ rows });
  });
});

module.exports = router;
