var express = require('express'); //mvc library
var app = express();

app.listen(3000, function() {
	console.log('nodeJS server app is running on 3000');
});


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* http://localhost:3000/products */
app.get('/products', function(req, res){
	console.log('Server received a request');
	var products = [{name: 'iPhone 10', brand: 'Apple', price: 65000},
					{name: 'iPad Air', brand: 'Apple', price: 70000},
					{name: 'Samsung S4', brand: 'Samsung', price: 55000},
					{name: 'Samsung Galaxy', brand: 'Samsung', price: 45000},
					{name: 'Windows Pro', brand: 'MicroSoft', price: 66000}]
	res.json(products);
});
