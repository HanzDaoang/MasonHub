// server.js
const express = require('express');
const axios = require('axios');
const { spawn } = require('child_process');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/scrape', async (req, res) => {
  try {
    // Spawn a child process to run the Python script
    const pythonProcess = spawn('python', ['gmu_scraper.py']);
    
    pythonProcess.stdout.on('data', (data) => {
      const scrapedData = JSON.parse(data.toString());
      res.json({ data: scrapedData });
    });

    pythonProcess.on('close', (code) => {
      if (code !== 0) {
        console.error(`Python script exited with code ${code}`);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
