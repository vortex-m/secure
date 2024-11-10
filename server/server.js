const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json()); 

app.use(bodyParser.json());

app.use('/downloads', express.static(path.join(__dirname, 'downloads')));

app.post('/authenticate', (req, res) => {
  const { password } = req.body;
  const correctPassword = 'adsa1';
  if (password === correctPassword) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
