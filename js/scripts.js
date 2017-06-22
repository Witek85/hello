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

function Vehicle(name, type){
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



// ------------------------------------------

document.getElementById("js1").innerHTML = y;
myObject.func('js2');

document.getElementById("js4").makeRed();

$( document ).ready(function() {

// easy jquery plugin
$("#js3").makeYellow();

});