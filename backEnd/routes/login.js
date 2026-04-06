const express = require("express");
const pool = require("../pool");
const router = express.Router();

router.get("/", (req, res) => {
  const name = req.query.name;
  pool.query("SELECT * FROM users WHERE name = ?", [name], (err, rows, fields) => {
      if (err) return res.status(500).json({ error: "error db" });
      if (rows.length === 0) return res.status(404).json({ error: "User not found" });
	    if (!name) return res.status(400).json({ error: "Name is required" });
      res.json({ user: rows[0] });
    },
  );
});

module.exports = router;
