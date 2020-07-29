const express = require('express');
const app = express();
const port = 3001;

app.listen(port, () => console.log(`App listening on port ${port}`))

app.get('/', (req, res) => {
    res.send('Hello Lam Dzai')
})

app.get('/users', (req, res) => {
    res.send('User list')
})

