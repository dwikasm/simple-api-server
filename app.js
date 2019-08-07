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

let users = [
    { id: '1', name: 'Dwika', userId: '1', gender: 'male'},
    { id: '2', name: 'Dwiki', userId: '2', gender: 'male'},
    { id: '3', name: 'Sasa', userId: '3', gender: 'female'},
];

app.get('/users', (req, res) => {
    // with query example (string only)
    let output = [...users];

    for (key in req.query) {
        output = output.filter(item => item[key] == req.query[key])
    }
    
    return res.send(output);
});

app.get('/users/:userId', (req, res) => {
    return res.send(users.find(item => item.userId == req.params.userId));
});