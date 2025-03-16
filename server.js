const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4041;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Handle all routes by serving index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Serving files from: ${__dirname}`);
}); 