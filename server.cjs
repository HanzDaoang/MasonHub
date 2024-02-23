const express = require('express');
const path = require('path');
const fs = require('fs/promises');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/ical_gmu.ics', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'src', 'ical_gmu.ics');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    res.send(fileContent);
  } catch (error) {
    console.error('Error reading ICS file:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
