const { log } = require('console');
const express = require('express')
var isEqual = require('lodash.isequal');
const app = express()
const cors = require('cors');
const addedBlogs = 'addedBlogs.json';
const editedBlogs = 'editedBlogs.json';
const deletedBlogs = 'deletedBlogs.json';
const fs = require("fs");
const port = process.env.PORT || 3000;

app.use(express.json());


app.use(cors());

app.get('/api/addedBlogs', (req, res) => {
    // Read data from the JSON file
    fs.readFile(addedBlogs, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
  
      // Parse JSON data
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    });
  });
  
  app.post('/api/addedBlogs', (req, res) => {
    const newData = req.body;
  
    // Read existing data from the JSON file
    fs.readFile(addedBlogs, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      console.log(data);
      // Parse JSON data
      const jsonData = JSON.parse(data);
      console.log(jsonData);
  
      // Append new data
      (jsonData.blogs).push(newData);
  
      // Write updated data back to the JSON file
      fs.writeFile(addedBlogs, JSON.stringify(jsonData), (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Internal server error' });
          return;
        }
  
        res.json({ message: 'Data saved successfully' });
      });
    });
  });
app.get('/api/editedBlogs', (req, res) => {
    // Read data from the JSON file
    fs.readFile(editedBlogs, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
  
      // Parse JSON data
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    });
  });
  
  app.post('/api/editedBlogs', (req, res) => {
    const newData = req.body;
  console.log(newData);
    // Read existing data from the JSON file
    fs.readFile(editedBlogs, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      console.log(data);
      // Parse JSON data
      const jsonData = JSON.parse(data);
      console.log(jsonData);
  
      // Append new data
      (jsonData.blogs).push(newData);
  
      // Write updated data back to the JSON file
      fs.writeFile(editedBlogs, JSON.stringify(jsonData), (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Internal server error' });
          return;
        }
  
        res.json(jsonData);
      });
    });
  });
  app.put('/api/editedBlogs', (req, res) => {
    const newData = req.body;
    console.log(newData);

    // Read existing data from the JSON file
    fs.readFile(editedBlogs, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      console.log(data);
      // Parse JSON data
      const jsonData = JSON.parse(data);
      console.log(jsonData);
      let editIndex = jsonData.blogs.findIndex((mainBlog)=> isEqual(newData.oldBlog,mainBlog.oldBlog))
      // Append new data
      console.log(editIndex);
      jsonData.blogs[editIndex] = newData
  
      // Write updated data back to the JSON file
      fs.writeFile(editedBlogs, JSON.stringify(jsonData), (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Internal server error' });
          return;
        }
  
        res.json(jsonData);
      });
    });
  });
app.get('/api/deletedBlogs', (req, res) => {
    // Read data from the JSON file
    fs.readFile(deletedBlogs, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
  
      // Parse JSON data
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    });
  });
  
  app.post('/api/deletedBlogs', (req, res) => {
    const newData = req.body;
  
    // Read existing data from the JSON file
    fs.readFile(deletedBlogs, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      console.log(data);
      // Parse JSON data
      const jsonData = JSON.parse(data);
      console.log(jsonData);
  
      // Append new data
      (jsonData.blogs).push(newData);
  
      // Write updated data back to the JSON file
      fs.writeFile(deletedBlogs, JSON.stringify(jsonData), (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Internal server error' });
          return;
        }
  
        res.json({ message: 'Data saved successfully' });
      });
    });
  });

app.listen(port,()=>{
  console.log(`i am on port ${port}`);
})