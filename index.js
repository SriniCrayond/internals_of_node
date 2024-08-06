// Import the express module
const express = require("express");
const fs = require('fs');
const path = require('path');
const app = express();

// Define the port number
const PORT = 3000;

app.use(express.json());

// Endpoint to read the content of the config file
app.get('/read-config', (req, res) => {
  const filePath = path.join(__dirname, 'config.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading config file', error: err });
    }
    res.status(200).json(JSON.parse(data));
  });
});

// Endpoint to update specific parameters in the config file
app.post('/update-config', (req, res) => {
  const filePath = path.join(__dirname, 'config.json');
  const updates = req.body;

  // Read the current config
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading config file', error: err });
    }

    // Parse the current config and apply updates
    let config = JSON.parse(data);
    config = { ...config, ...updates };

    // Write the updated config back to the file
    fs.writeFile(filePath, JSON.stringify(config, null, 2), 'utf8', (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error writing to config file', error: err });
      }
      res.status(200).json({ message: 'Config file updated successfully', config });
    });
  });
});

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Define a route for the root URL
app.get("/userData", (req, res) => {
  console.log("-------------------userData API start--------------------");
  setTimeout(() => {
    // Asynchronously query the database
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        status: "success",
        data: [
          { id: 1, name: "Srini" },
          { id: 2, name: "Nithu" },
          { id: 3, name: "Nandhu" },
        ],
      })
    );
    console.log("-------------------userData API end--------------------");
  }, 10000);
});

app.get("/login", (req, res) => {
  console.log("-------------------login API start--------------------");
  //   setTimeout(() => {
  // Asynchronously query the database
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      status: "success",
      message: "Login success!",
    })
  );
  console.log("-------------------login API end--------------------");
  //   }, 10000);
});
// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
