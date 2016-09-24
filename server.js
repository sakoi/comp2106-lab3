/* Kayla Wiest - Lab3 */

//reference packages
var connect = require('connect');
var url = require('url');

//instance of a connect object (constructor)
var app = connect();

var calculator = function(req,res,next){
    //gain subquery valuse from url
    var qs = url.parse(req.url, true).query;
    
    //variables from subquery
    var x = qs.x;
    var y = qs.y;
    var method = qs.method;
    var total;
    
    //if add/subtract/multiply/divid change method var to symbol and make calculation of x and y
    if(method == 'add' || method == 'subtract' || method == 'multiply' || method == 'divid'){
      
        if(method == 'add'){
            method = '+';
            total = parseInt(x) + parseInt(y) ;
        }
        if(method == 'subtract'){
            method = '-';
            total = x - y;
        }      
        if(method== 'multiply'){
            method = '*';
            total = x * y;
        }
        if(method == 'divid'){
            method = '/';
            total = x / y;
        }
            
    }else{
        res.end('Method value is invalid\nPlease enter one of the following: add, subtract, multiply, or divid')
    }//end if/else

    //display values
    res.end(x + ' ' + method + ' ' + y + ' = ' + total);
}; 

var fallback = function(req,res,next){
    res.end('Lab 3 by Kayla Wiest');
};

//server displays
app.use('/lab3', calculator)
app.use(fallback);

//start server on port 3000
app.listen(3000);