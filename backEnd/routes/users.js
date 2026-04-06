const express = require("express");
const pool = require("../pool");
const router = express.Router();

router.get("/", (req, res) => {
  pool.query("SELECT * FROM users", (err, rows, fields) => {
    if (err) {
		throw err;
	}
    res.json({ rows });
  });
});

module.exports = router;
