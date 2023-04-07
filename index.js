const PORT = 3000;
const express = require('express');
const apiRoute = require('./src/api/routes');
const path = require('path');

const app = express();
const cors = require('cors');

app.use(cors())
app.use('/', express.static(path.join(__dirname, "src", "public")));
app.use('/api', apiRoute);
app.listen(PORT, () => {
    console.log("Server running on Port: ", PORT);
})