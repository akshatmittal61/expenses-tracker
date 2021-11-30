import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
app.delete('/delete/:id', (req, res) => {
    let id = +req.params.id;
    let newArray = [];
    newArray = transactions.filter((a, index) => index !== id);
    newArray.map((transaction, index) => {
        transaction.id = index;
    })
    transactions = [...newArray];
    res.json(transactions);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));