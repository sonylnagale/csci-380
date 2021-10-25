import React from 'react';
import csvToJson from 'convert-csv-to-json'

const CSV = () => {
    const csvFilePath = './factbook.csv'


    let fileInputName = 'factbook.csv';
    let fileOutputName = 'myOutputFile.json';

    csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);



    return (
        <p>Hello</p>
    )
}

export default CSV