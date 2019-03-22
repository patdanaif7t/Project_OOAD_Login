const express = require('express');
const app = express();
const port = 4000;
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://user1:12345678za@ds017193.mlab.com:17193/managementexam');


const LoginRouter = require('./routes/LoginRouter');
const MangePerson = require('./routes/MangePersonRouter')

app.use(express.static('public'));
app.set('view engine', 'ejs');
   
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
 
app.use ('/login', LoginRouter );
app.use ('/mangeperson', MangePerson)


app.route('/').get(function (req, res) {
  res.redirect('/login')
});




app.listen(port, function(){
  console.log('เริ่มการทำงาน', port);
});