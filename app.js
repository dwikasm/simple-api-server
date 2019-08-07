var express = require("express");
var app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

/*============================================================*/

app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
});

app.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
});

app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
});

/*============================================================*/

app.get("/names", (req, res, next) => {
    res.json(["Dwika", "Dwiki", "Egi"]);
});

let users = {
    1: { id: '1', name: 'Dwika', userId: '1'},
    2: { id: '2', name: 'Dwiki', userId: '2'}    
};

app.get('/users', (req, res) => {
    return res.send(Object.values(users));
});

app.get('/users/:userId', (req, res) => {
    return res.send(users[req.params.userId]);
});