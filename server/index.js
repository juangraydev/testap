const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api', api);

app.listen(port, () => {
    console.log(`this is server port: ${port}`);
});