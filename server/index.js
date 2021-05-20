const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
//import { jsonGraphqlExpress } from 'json-graphql-server';

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// const server = JsonGraphqlServer({
// 	data,
// 	url: 'http://localhost:3000/graphql'
// });

// server.start();

app.get('/', (req, res) => {
	res.sendStatus(200);
});

// app.get('/graphql', );

app.listen(PORT, () => {
	console.log('Serving up now at '+ JSON.stringify(PORT));
});