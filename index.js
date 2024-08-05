// Import the express module
const express = require("express");
const app = express();

// Define the port number
const PORT = 3000;

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
