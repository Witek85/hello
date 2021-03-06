var test = "test123";

var test1 = {};
var test2 = [];

// This is a function constructor:
function Person(a, b) {
    this.firstName = a;
    this.lastName  = b;
}

// This creates a new object
var Jan = new Person("Jan", "Kowalski");
var Zenon = new Person("Zenon", "Nowak");

document.querySelector("#js11").innerHTML += "<br/>" + Jan.firstName + ' ' + Jan.lastName;
document.querySelector("#js11").innerHTML += "<br/>" + Zenon.firstName + ' ' + Zenon.lastName;


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
document.querySelector("#js9").innerHTML += "<br/>" + 5/null + " " + isInteger(null);
document.querySelector("#js9").innerHTML += "<br/>" + 5/"string" + " " + isInteger(null);

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

// closure 3 - multiply

function multiply(x) {
    return function (y) { // anonymous function 
        return function (z) { // anonymous function 
            return x * y * z; 
        };
    };
}

document.getElementById("js16").innerHTML += "<br/>" + multiply(2)(3)(2);
document.getElementById("js16").innerHTML += "<br/>" + multiply(3)(4)(5);

// closure 4

var foo_global;

function foo_external() {

  var a = 2;

  function foo_internal() {
    document.getElementById("js17").innerHTML += "<br/>" + "foo_internal " + a
  }

  foo_global = foo_internal; // assign foo_internal to global variable

}

function foo_launch() {
  foo_global(); // closure!
}

foo_external();
foo_launch();


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

// module 2

function CoolModule() {
  var something = "cool";
  var another = [1, 2, 3];
  function doSomething() {
    console.log( something );
    document.getElementById("js18").innerHTML += "<br/>" + something;

  }
  function doAnother() {
    document.getElementById("js18").innerHTML += "<br/>" + another.join( " ! " ) ;
  }
  return {
    doSomething: doSomething,
    doAnother: doAnother
  };
}
var fooMod = CoolModule();
fooMod.doSomething(); // cool
fooMod.doAnother(); // 1 ! 2 ! 3

// module 3 

var MyModules = (function Manager() {
  var modules = {};
  function define(name, deps, impl) {
    for (var i=0; i<deps.length; i++) {
      deps[i] = modules[deps[i]];
    }
    modules[name] = impl.apply( impl, deps );
  }
  function get(name) {
    return modules[name];
  }
  return {
    define: define,
    get: get
  };
})();

MyModules.define( "helloMaker", [], function(){
  function hello(who) {
    return "Let me introduce: " + who;
  }
  return {
    hello: hello
  };
} );
MyModules.define( "uppercaseMaker", ["helloMaker"], function(helloMaker){
  var hungry = "hippo";
  function awesome() {
    console.log( helloMaker.hello( hungry ).toUpperCase() );
    document.getElementById("js19").innerHTML += "<br/>" + helloMaker.hello( hungry ).toUpperCase();
  }
  return {
    awesome: awesome
  };
} );
var helloMakerGlobal = MyModules.get( "helloMaker" );
var uppercaseMakerGlobal = MyModules.get( "uppercaseMaker" );
document.getElementById("js19").innerHTML += "<br/>" + helloMakerGlobal.hello( "hippo" ); // Let me introduce: hippo
uppercaseMakerGlobal.awesome(); // LET ME INTRODUCE: HIPPO

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

// private 

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;
var stoleSecretIdentityWorking = hero.getSecretIdentity.bind(hero);

document.getElementById("js13").innerHTML += "<br/>" + stoleSecretIdentity();
document.getElementById("js13").innerHTML += "<br/>" + stoleSecretIdentityWorking();
document.getElementById("js13").innerHTML += "<br/>" + hero.getSecretIdentity();

// napisz funkcję która zadziała w obydwu przypadkach
// console.log(sum(2,3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5

function suma1(x, y) {
if(y !== undefined) {
console.log("suma1(2,3) x " + x);
console.log("suma1(2,3) y " + y);
return x + y;
} else {
   return function(y) { 
    console.log("suma1(2)(3) x " + x);
    console.log("suma1(2)(3) y " + y);
    return x + y; 
  };
}
}

document.getElementById("js10").innerHTML += "<br/>" + suma1(2, 3);
document.getElementById("js10").innerHTML += "<br/>" + suma1(2)(3);

// eval

function concatValues(a, b) {
  eval(b);
  return a + b;
}
function concatValuesStrict(a, b) {
  "use strict"
  eval(b);
  return a + b;
}
var b = 3;

document.getElementById("js12").innerHTML += "<br/>" + concatValues(1, 'var b = 2');
document.getElementById("js12").innerHTML += "<br/>" + concatValuesStrict(1, 'var b = 2');

// is palindrome

function isPalindrome(arg) {
  arg = arg.toLowerCase();
  return arg == arg.split('').reverse().join('');
}

console.log(isPalindrome('kajak'));
console.log(isPalindrome('kajaki'));

// closure settimeout

for (var i = 0; i < 5; i++) {
  setTimeout(function() { console.log('i', i); }, i * 1000 );
}

for (var i = 0; i < 5; i++) {
  (function(x){
    setTimeout(function() { console.log('x', x); }, i * 1000 );
  })(i)

}

// Depth-First-Search algorithm
// Create a function that, given a DOM Element on the page, 
// will visit the element itself and all of its descendents 
// (not just its immediate children). 
// For each element visited, the function should pass that element to a provided callback function.

// The arguments to the function should be:
// a DOM element
// a callback function (that takes a DOM element as its argument)

function Traverse(p_element, p_callback) {
  p_callback(p_element);
  var list = p_element.children;

  for (var i = 0; i < list.length; i++) {
      Traverse(list[i], p_callback); // recursive call  
    }
}

var r_element = document.querySelector('.container');
function r_callback(arg) {
  console.log(arg);
  document.getElementById("js14").innerText += arg;
}

Traverse(r_element, r_callback);

function addClassEverywhere(s_element) {
    s_element.className += " some-class";
    var list = s_element.children;

  for (var i = 0; i < list.length; i++) {
    console.log(i);
    addClassEverywhere(list[i]);
    }
}

var t_element = document.getElementById("js15");

addClassEverywhere(t_element);



// ------------------------------------------

document.getElementById("js1").innerHTML = y;
myObject.func('js2');

document.getElementById("js4").makeRed();

$( document ).ready(function() {

// easy jquery plugin
$("#js3").makeYellow();

});