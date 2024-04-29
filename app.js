const express = require("express");
const app = express ();
var bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('index');
});


app.post("/fizzbuzz", (req, res) => {
    console.log(req.body.input_data.split(','));
    let arr = req.body.input_data.split(',');
    let result = [];
    for (i = 0; i < arr.length; i++){
        let num = arr[i];
        let getFizzBuzz = num % 3 === 0 ? ( num % 5==0 ? "FizzBuzz" : "Fizz" ) : ( num % 5==0 ? "Buzz" : printInvalid(num));
        result.push(getFizzBuzz);
        result.join(' ');
    }

    res.send({status: 200, message: result});
});

function printInvalid(number) {
    var result = '';
    if(isNaN(number)) { 
       result = 'Invalid Item';
    } else {
        result = 'Divided ' + number + ' by 3 Divided ' + number + ' by 5'
    }
    return result;
}

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

module.exports = app;

