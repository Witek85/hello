var test = "test123";

var test1 = {};
var test2 = [];


console.log(test2 == true);

var y = 1;
  if (function f(){}) {
    y += typeof f;
  }
  
  console.log(y);

	// document.getElementById("js3").style.background = "yellow";
	// document.getElementById("js3").style.border = "1px solid red";


$.fn.makeYellow = function() {
    this.css( "background", "yellow" );
    this.css( "border", "1px solid red" );
};

// To have it chained, you would need to add to the Element interface which all DOM nodes implement. If you go that way, you could do:
Element.prototype.makeRed = function() {
	this.style.background = "red";
  this.style.border = "1px solid blue";
}

// checking is integer

function isInteger(x) { 
  return (typeof x === 'number') && (x % 1 === 0); 
}

document.querySelector("#js9").innerHTML += "<br/>" + 5 + " " + isInteger(5);
document.querySelector("#js9").innerHTML += "<br/>" + "five" + " " + isInteger("five");
document.querySelector("#js9").innerHTML += "<br/>" + null + " " + isInteger(null);

// this and self
var myObject = {
    foo: "bar",
    func: function(elem) {
        var self = this;
        document.getElementById(elem).innerHTML += "<br/>outer func:  this.foo = " + this.foo;
        document.getElementById(elem).innerHTML += "<br/>outer func:  self.foo = " + self.foo;

        (function() {
            document.getElementById(elem).innerHTML += "<br/>inner func:  this.foo = " + this.foo;
            document.getElementById(elem).innerHTML += "<br/>inner func:  self.foo = " + self.foo;
        }());

        function funkcja2() {
        	document.getElementById(elem).innerHTML += "<br/>inner func2:  this.foo = " + this.foo;
          document.getElementById(elem).innerHTML += "<br/>inner func2:  self.foo = " + self.foo;
        };

        funkcja2();
    }
};

// obiekty i konstruktory

function Vehicle(name, type, defaults){
  this.name=name;
  this.type=type;
  this.drive=function(elem){
    console.log(this.name + " is driving...");
    document.getElementById(elem).innerHTML += "<br/>" + this.name + " is driving...";
  };
}

audi = new Vehicle("Audi", "Sedan");
merc = new Vehicle("Mercedes", "Kombi");

audi.drive("js5");
merc.drive("js5");

// typy

var bar1;
var bar2 = null;
var nan1 = 3 * "4";
var nan2 = 3 * "nnn";
var bar4 = [];
var bar5 = function() {};
console.log(typeof bar1 === "undefined"); 
console.log(typeof bar2 === "object"); 
console.log(nan1, typeof nan1, typeof nan1 === "number"); 
console.log(nan2, typeof nan2, typeof nan2 === "number"); 
console.log(typeof bar4,  typeof bar4 === "object"); 
console.log(typeof bar5, typeof bar5 === "object"); 

// to jest najlepsze
// Numbers in JavaScript are all treated with floating point precision, 
// and as such, may not always yield the expected results.”

var num1 = 0.1;
var num2 = 0.2;

console.log(0.1);
console.log(0.2);
console.log(0.3 + 0.3);
console.log(0.1 + 0.2);
console.log((0.1 + 0.2).toFixed(1));
console.log(num1.toFixed(2) + num2.toFixed(2));
console.log(0.1 + 0.2 == 0.3);
console.log(0.1.toFixed(2) + 0.2.toFixed(2) == 0.3);

// function settimeout

(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();

// closure 1

function helloSayer(first_name, last_name) {

  var message = "Hello " + first_name + " " + last_name;

  var sayHello = function() {
    // console.log(message);
    document.getElementById("js6").innerHTML += "<br/>" + message;
  }

  return sayHello;
}

var JohnGreeter = helloSayer("John", "Smith");
JohnGreeter();

// closure 2

function adder(x) {

  var add = function(y) {

    console.log('jestem y '+ y)
    return x + y;
  }
  console.log('jestem x '+ x)
  return add;
}

var addOne = adder(1);
var addFive = adder(5);
var addTen = adder(10);

// addOne(15);
// addFive(16);
// addTen(17);

document.getElementById("js7").innerHTML += "<br/>" + addOne(15);
document.getElementById("js7").innerHTML += "<br/>" + addFive(16);
document.getElementById("js7").innerHTML += "<br/>" + addTen(17);

// modules

function User() {
  var username;
  var password;

  function doLogin(user, pw) {
    username = user;
    password = pw;

    console.log("login: "+user+" "+pw);
  }

  var publicApi = {
    login: doLogin
  }

  return publicApi;
};

var Fred = User();
Fred.login("Fred", "fred1234");

// this

function thisFoo() {
  console.log(this.bar);
  document.getElementById("js8").innerHTML += "<br/>" + (this.bar);
}

var bar = "global";

var thisObj1 = {
  bar: "obj1",
  thisFoo: thisFoo
}

var thisObj2 = {
  bar: "obj2"
}

thisFoo(); //global
thisObj1.thisFoo(); //obj1
thisFoo.call(thisObj2); //obj2
new thisFoo();

// Discuss possible ways to write a function isInteger(x) that determines if x is an integer.

// ------------------------------------------

document.getElementById("js1").innerHTML = y;
myObject.func('js2');

document.getElementById("js4").makeRed();

$( document ).ready(function() {

// easy jquery plugin
$("#js3").makeYellow();

});