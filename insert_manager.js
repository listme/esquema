var fs = require('fs'),
    sqlite3 = require('sqlite3');

var file = __dirname + '/inserts/item.json';
var dbPath = __dirname + '/listme.db';

var db = new sqlite3.Database(dbPath);



fs.readFile(file, { encoding: 'utf8' }, function (err, data) {
  if (err) { return; }


  JSON.parse(data).forEach(function (elem) {
//    console.log("insert into item values ('" + JSON.stringify(elem) + "');");
    var sql = "insert into item(content) values ('" + JSON.stringify(elem) + "');";
    console.log(sql);
    db.run(sql);

  });


});

db.get('select * from item;', function(err, row){
  if (err) { console.log(err); return; }

      console.log('resultados: ' + row);
});
