const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
  const userMessage = req.body.message;
  const response = await axios.post('https://api.huggingface.co/inference', {
    inputs: userMessage
  });
  const botResponse = response.data; // format as needed
  res.json(botResponse);
});

module.exports = router;
