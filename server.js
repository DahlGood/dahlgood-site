const express = require("express");
const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/web/index.html');
});

app.listen(port, () => {
    console.log(`Server started on port ` + port);
});