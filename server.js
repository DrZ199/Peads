const express = require('express');
const bodyParser = require('body-parser');
const chatRoutes = require('./routes/chat');
const citationsRoutes = require('./routes/citations');
const logsRoutes = require('./routes/logs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/chat', chatRoutes);
app.use('/api/citations', citationsRoutes);
app.use('/api/logs', logsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
