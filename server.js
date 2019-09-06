var MongoClient = require('mongodb').MongoClient;
const express = require('express')
const bodyParser= require('body-parser')
const Attendence = require('./Routes/Attendence/index')

const app = express();
var url = "mongodb://localhost:27017/mydb";


app.use(bodyParser.urlencoded({extended: true,limit: '50mb'}))
app.use(bodyParser.json({limit: '50mb'})); 
app.set('view engine', 'ejs')

app.use('/Attendence',Attendence)



MongoClient.connect(url, (err, client) => {
  if (err) return console.log(err)
  db = client.db('test') 
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

