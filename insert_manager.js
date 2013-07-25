var fs = require('fs'),
    sqlite3 = require('sqlite3');

var file = __dirname + '/inserts/item.json',
    dbPath = __dirname + '/listme.db',
    db = new sqlite3.Database(dbPath);

fs.readFile(file, { encoding: 'utf8' }, function (err, data) {
  if (err) { return; }

  JSON.parse(data).forEach(function (elem) {
    db.run('INSERT INTO item (content) VALUES (?);', JSON.stringify(elem));
  });
});
