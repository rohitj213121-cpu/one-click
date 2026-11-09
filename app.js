const express = require('express');
const app = express();

app.use(express.static('Public'));
app.use(express.static('Public'));

app.get('/api/data', (req, res) => {
    res.json({ servermessage: " Server Status: Active & Connected Successfully!" });
});

app.listen(5000, () => {
    console.log("Server start");
});