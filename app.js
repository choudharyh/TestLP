const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Define the directory containing the HTML files
const publicDirectoryPath = path.join(__dirname);

// Serve static files (HTML, CSS, JS, images) from the public directory
app.use(express.static(publicDirectoryPath));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
