const express = require("express");
const app = express();
const cors = require("cors");

const addedBlogs = "addedBlogs.json";
const users = "users.json";

const fs = require("fs");
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.get("/api/addedBlogs", (req, res) => {
  // Read data from the JSON file
  fs.readFile(addedBlogs, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
      jsonData = JSON.parse(data);
      return;
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData);
    // Parse JSON data
  });
});
app.get("/api/users", (req, res) => {
  // Read data from the JSON file
  fs.readFile(users, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
      jsonData = JSON.parse(data);
      return;
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData);
    // Parse JSON data
  });
});

app.delete("/api/addedBlogs/:id", (req, res) => {
  const resourceId = parseInt(req.params.id);

  // Read existing data from the JSON file
  fs.readFile(addedBlogs, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    console.log(data);
    // Parse JSON data
    const jsonData = JSON.parse(data);
    console.log(jsonData);
    index = jsonData.blogs.indexOf(
      jsonData.blogs.find((blog) => blog.id == resourceId)
    );
    // Append new data
    jsonData.blogs.splice(index, 1);

    // Write updated data back to the JSON file
    fs.writeFile(addedBlogs, JSON.stringify(jsonData), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }

      res.json({ message: "Data saved successfully" });
    });
  });
});
app.put("/api/addedBlogs/:id", (req, res) => {
  const resourceId = parseInt(req.params.id);
  const newData = req.body;

  // Read existing data from the JSON file
  fs.readFile(addedBlogs, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    console.log(data);
    // Parse JSON data
    const jsonData = JSON.parse(data);
    console.log(jsonData);
    index = jsonData.blogs.indexOf(
      jsonData.blogs.find((blog) => blog.id == resourceId)
    );
    // Append new data
    jsonData.blogs.splice(index, 1, { id: index + 1, ...newData });

    // Write updated data back to the JSON file
    fs.writeFile(addedBlogs, JSON.stringify(jsonData), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }

      res.json(req.body);
    });
  });
});

app.post("/api/addedBlogs", (req, res) => {
  const newData = req.body;

  // Read existing data from the JSON file
  fs.readFile(addedBlogs, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    console.log(data);
    // Parse JSON data
    const jsonData = JSON.parse(data);
    console.log(jsonData);

    // Append new data
    jsonData.blogs.push({ id: jsonData.blogs.length + 1, ...newData });

    // Write updated data back to the JSON file
    fs.writeFile(addedBlogs, JSON.stringify(jsonData), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }

      res.json({ message: "Data saved successfully" });
    });
  });
});

app.listen(port, () => {
  console.log(`i am on port ${port}`);
});
