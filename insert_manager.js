var fs = require('fs');
var rows;

rows = JSON.parse(fs.readFileSync(__dirname + '/inserts/item.json', 
                                  { encoding: 'utf8' }));

rows.forEach(function (elem, i) {
//  console.log('rows[' + i + ']: ' + JSON.stringify(elem));
  console.log("insert into item values ('" + JSON.stringify(elem) + "');");
});
