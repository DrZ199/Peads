const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const citations = [
    { text: "Nelson Textbook of Pediatrics", year: "2020" },
    { text: "Pediatric Care Guidelines", year: "2019" }
  ];
  res.json(citations);
});

module.exports = router;