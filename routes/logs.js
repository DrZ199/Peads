const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const logs = [
    { user: "User1", message: "What is pediatric care?", response: "Pediatric care is..." },
    { user: "User2", message: "Vaccination schedule?", response: "The vaccination schedule is..." }
  ];
  res.json(logs);
});

module.exports = router;
