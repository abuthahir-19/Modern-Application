import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.use (express.urlencoded ({extended: true}));
app.get ('/', (req, res) => {
    res.send ("Hello World !!");
});

app.post ('/', (req, res) => {
    console.log ("Connected to the front end React.js");
    console.log (req.body);
    res.send ("POST REQUEST SATISFIED");
});

app.listen (PORT, _ => console.log (`Server running on the port ${PORT}`));