const express = require('express');

const app = express();

app.get('/',(req, res) => {
    res.send('<h1>My Node Application</h1>');
});

app.listen(5000, () => {
   console.log('Listening on Port 5000: ');
});