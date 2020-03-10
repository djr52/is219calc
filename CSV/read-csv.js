const parse = require('csv-parse');
const fs = require('fs');
const City = require('../model/city');
let output = [];

class readCsv{

    csvReadStream(csvFile)
    {

        fs.createReadStream(csvFile)

    .pipe(parse({
        delimiter: ',',
        trim: true,
        skip_empty_lines: true
    })
        .on('readable', function(){
            //readCsv.pushRecord();
            //console.log(record);
            let record;
            const city = new City(record);
            while (record = this.read()) {
                const city = City.factoryCity(record);
                output.push(record);
            }


        })
        // When we are done, test that the parsed output matched what expected
        .on('end', function(){

            console.log(output);
            //return output;
        }));



    }
    static pushRecord(){

    }


}
module.exports = readCsv;
