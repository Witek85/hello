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
console.log(0.1);
console.log(0.2);
console.log(0.3 + 0.3);
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);

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

// Discuss possible ways to write a function isInteger(x) that determines if x is an integer.

// ------------------------------------------

document.getElementById("js1").innerHTML = y;
myObject.func('js2');

document.getElementById("js4").makeRed();

$( document ).ready(function() {

// easy jquery plugin
$("#js3").makeYellow();

});