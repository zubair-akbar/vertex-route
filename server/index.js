const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.get('/', (req, res) => {
	res.sendStatus(200);
});

app.listen(PORT, () => {
	console.log('Serving up now at '+ JSON.stringify(PORT));
});