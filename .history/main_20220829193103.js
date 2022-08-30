const express = require('express');
const products = require('./data/products.json');
const employees = require('./data/employees.json');
const companies = require('./data/companies.json');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.json(products);
})

app.get("/", (req, res) => {
    res.json(employees);
})

app.get("/", (req, res) => {
    res.json(companies);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

let wantedData = products.filter(function (i) {
    return i.id === 10;
});