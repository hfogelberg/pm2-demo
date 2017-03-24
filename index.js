var express = require('express');
var app = express();

app.get('/api', (req, res) => {
  res.json({message: 'Hello from the Server!'});
});

app.listen(8081, ()=>{
  console.log('API listening on port 8081');
});
