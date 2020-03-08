const parse = require('csv-parse');
const fs = require('fs');
const output = [];
const City = require('./model/city');

let csvFile = 'Data/WorldCitiesShortList.csv';

//const cityList = data.map(row => new City(...row));

fs.createReadStream(csvFile)
    .pipe(parse({
        delimiter: ',',
        trim: true,
        skip_empty_lines: true
    })
        .on('readable', function(){
            let record;

            while (record = this.read()) {
                const city = new City(record);
                output.push(record)
            }
        })
        // When we are done, test that the parsed output matched what expected
        .on('end', function(){

            console.log(output);

        }));