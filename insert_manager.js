var fs = require('fs');

var file = __dirname + '/inserts/item.json';

fs.readFile(file, { encoding: 'utf8' }, function (err, data) {
  if (err) { return; }

  JSON.parse(data).forEach(function (elem) {
    console.log("insert into item values ('" + JSON.stringify(elem) + "');");
  });
});
