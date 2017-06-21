var test = "test123";

var test1 = {};
var test2 = [];


console.log(test2 == true);

var y = 1;
  if (function f(){}) {
    y += typeof f;
  }
  
  console.log(y);


$.fn.makeRed = function() {
    this.css( "background", "yellow" );
    this.css( "border", "1px solid red" );
};

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

document.getElementById("js1").innerHTML = y;
myObject.func('js2');

$( document ).ready(function() {

// easy jquery plugin
$("#js3").makeRed();

});