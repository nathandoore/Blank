/**
 * @author Nathan Doore
 * @description Single file application for a simple task
 * @description Would usually use Linting, but due to size, linting
 * @description was left out.
 */

const fs = require('fs');
const Papa = require("papaparse"); 

  let fileData;

  // use of readFileSync requires try catch for err handling
  try{
    fileData = fs.readFileSync('src/assets/tassk-data.csv', 'utf8');
  } catch(err) {
    console.log('file not found', err.message); return;
  };

  /**
   * @description CSV handler, 'Papa'
   */
  Papa.parse(fileData, {
    header: true,
    complete: results => {

      const allHeaders = extractHeaders(results.data, 'ColInQuestion');
      const dataWithHeaders = injectHeaders(results.data, allHeaders);
      const newData = injectValues(dataWithHeaders, allHeaders);
    
      var newCSV = Papa.unparse(newData); 
      fs.writeFileSync("src/assets/output.csv", newCSV); 
    }
  });
  
  /**
   * @description Checks for all possible headers
   * @description String as param to maintainability
   * @param {Array} data 
   * @param {String} column
   * @returns {Array}
   */
  function extractHeaders(data, column) {
    const allHeaders = [];
    data.forEach((row) => {
      Object.keys(row).map((key) => {
        if(key === column){
          const newKeys = row[key].split(';');
          newKeys.forEach((newKey) => {
              if(allHeaders.includes(newKey)) return;
              allHeaders.push(newKey);
          });
        }
      });
    });

    return allHeaders;
  };

  /**
   * @description Injects the unique headers into dataset
   * @param {Array} data 
   * @param {Array} headers 
   * @returns {Array} Updated dataset 
   */
  function injectHeaders(data, headers) {
    headers.forEach((header) => {
      data[header] = '';
    })
    return data;
  }

  /**
   * @description Injects values into data set ready for CSV conversion
   * @param {Array} data 
   * @param {Array} headers 
   * @returns {Array} complete dataset
   */
  function injectValues(data, headers) {
    data.forEach((row, index) => {
      const picked = row['ColInQuestion'].split(';');
      headers.forEach((header) => {
        if(picked.includes(header)) data[index][header] = 1;
        else data[index][header] = 2;
      })
    });

    return data;
  }
