import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs'
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let transactions = [];
fs.readFile(path.join(__dirname, "transactions.json"), "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
    transactions = [...JSON.parse(data)];
})

app.get('/', (req, res) => {
    res.json(transactions);
})
app.post('/add', (req, res) => {
    let newTransaction = req.body;
    transactions = [...transactions, newTransaction];
    console.log(transactions);
    fs.writeFile(path.join(__dirname, 'transactions.json'), JSON.stringify(transactions), (err) => {
        if (err) throw err;
        console.log(`File Written to ${__dirname}/transactions.json`);
    })
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
    fs.writeFile(path.join(__dirname, 'transactions.json'), JSON.stringify(transactions), (err) => {
        if (err) throw err;
        console.log(`File changed: ${__dirname}/transactions.json`);
    })
    res.json(transactions);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));