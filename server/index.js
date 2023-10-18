
const express = require("express");
const mysql = require('mysql');
const request = require('request');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);
require('dotenv').config()















// create Database
var con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  database:process.env.MYSQL_DATABASE,
  password:  process.env.MYSQL_PASSWORD
});


// Connects Table & Error messange
function DataConnect(data, value) {
  con.query(data, function (err, result) {
    // if (err) throw err;  
    console.log(value);
  });
 }









app.post('/api', (req, res) => {

  try {

  function messageSent(callback) {   
request.post('https://textbelt.com/text', {
  form: {
      //  "fromNumber": "+8860974036023",
    phone:"+17747323462",
    message: `${req.body.body[0]}
                ${req.body.body[3]}
                ${req.body.to}
              ${req.body.body[1]}
              ${req.body.body[2]* 153}`,
    key: process.env.KEY_TEXTBALTE,// bayer
  },
}, (err, httpResponse, body) => {
  console.log(JSON.parse(body));
});
      callback()
      }

    function saveDatabaseMessage() {
    
      con.connect(function (err) {
        // if (err) throw err;
        console.log("Connected!");

        var sql = "CREATE TABLE paydata (id INT AUTO_INCREMENT, name VARCHAR(255), number VARCHAR(35), MMT_Companey VARCHAR(26), dolor LONGTEXT,date VARCHAR(25), PRIMARY KEY(id))";

        con.query(sql, function () {

          let amount = (parseInt(req.body.body[2]) + (parseInt(req.body.body[2]) / 100) * 10);
            var data = "INSERT INTO paydata (name, number, MMT_Companey, dolor,date ) VALUES('"+req.body.body[0]+"','"+ req.body.to +"', '"+req.body.body[1]+"','"+amount+"', '"+req.body.body[3]+"')";
            DataConnect(data, "Number of records");
          

            var resetid = "ALTER TABLE paydata AUTO_INCREMENT=1";
            DataConnect(resetid, "reset");
        });

        });
    }
    
  messageSent(saveDatabaseMessage);

    

  } catch (error) {
    console.log(error);
 }
});




// Databese Get method



app.get('/dasbord', (req, res) => { 

 
    con.query("SELECT * FROM paydata", function (err, result, fields) {
      // if (err) throw err;
      res.send(result);
    });

 

});


app.listen(5000, () =>
  console.log(`server is ruing http://localhost:${5000}`))


