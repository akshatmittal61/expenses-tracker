import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* let transactions = [
    {
        id: 0,
        title: "tution",
        amount: 3000
    },
    {
        id: 1,
        title: "donation",
        amount: -90
    },
    {
        id: 2,
        title: "travel",
        amount: 100
    },
    {
        id: 3,
        title: "party",
        amount: -50
    },
    {
        id: 4,
        title: "dress",
        amount: -750
    },
    {
        id: 5,
        title: "hackathon",
        amount: 5000
    },
    {
        id: 6,
        title: "fees",
        amount: -50000
    },
    {
        id: 0,
        title: "lottery",
        amount: 40000
    },
    {
        id: 7,
        title: "intern",
        amount: 7500
    }
]; */
let transactions = [];
app.get('/', (req, res) => {
    res.json(transactions);
})
app.post('/add', (req, res) => {
    let newTransaction = req.body;
    console.log(req.body);
    transactions = [...transactions, newTransaction];
    res.json(newTransaction);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));