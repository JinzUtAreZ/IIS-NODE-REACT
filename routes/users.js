const express = require('express');
const router = express.Router();
const sql = require('mssql');
const dbconfig = require('../connection/connectdb');

//// register a user using POST method
//// server link   /api/users
//// access: public
router.get('/', (req, res) => {
  //res.json({ message: 'test asshole' });
  //console.log(typeof dbconfig.config);
  //console.log(req.query.username);

  try {
    var conn = new sql.ConnectionPool(dbconfig.config);
    conn.connect().then(function(pool) {
      var request = new sql.Request(pool);
      request
        .execute('spLoad_AllUsers')
        .then(function(recordset) {
          //console.dir(recordset);
          console.log(recordset.recordset.length);
          res.json(recordset.recordset);
          conn.close();
        })
        .catch(function(err) {
          console.log(err);
          conn.close();
        });
    });
    //res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500);
  }
});

router.post('/', (req, res) => {
  try {
    var conn = new sql.ConnectionPool(dbconfig.config);
    conn.connect().then(function(pool) {
      var request = new sql.Request(pool);
      request.input('inUser', sql.VarChar(50), req.query.username);
      request.input('inPass', sql.VarChar(50), req.param.password);
      request
        .execute('spLoad_LoginUser')
        .then(function(recordset) {
          res.json(recordset.recordset);
          conn.close();
        })
        .catch(function(err) {
          console.error(err.message);
          res.status('500').send('Server Error');
        });
    });
  } catch (err) {
    console.error(err.message);
    res.status('500');
  }
});

module.exports = router;
