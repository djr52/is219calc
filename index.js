const parse = require('csv-parse');
const fs = require('fs');
const output = [];
const City = require('./model/city');
const readCSV = require('./CSV/read-csv');


let csvFile = 'Data/WorldCitiesShortList.csv';
let csvRead = new readCSV();

console.log(csvRead.csvReadStream(csvFile));
