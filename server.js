const express = require('express');
const app = express();

const PORT = 8080

app.get('/', (req, res) => {
	res.status(200).send('Hello World!');
});

app.get('/index', (req, res) => {
	res.status(200).sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}...`);
});