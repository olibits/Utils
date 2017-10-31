/*=================================
=            Variables            =
=================================*/

var nameAwesome = 5;
console.log("nameAwesome", nameAwesome);

var stringAwesome = "This variable is awesome!!!";
console.log("stringAwesome", stringAwesome);

var boolAwesome = false;
console.log("boolAwesome", boolAwesome);

var arrayAwesome = ["one","two", boolAwesome, stringAwesome, nameAwesome];
console.log("arrayAwesome", arrayAwesome[0]);

var objectAwesome = {"one":"uno","two":"dos"};
console.log("objectAwesome", objectAwesome.one);

/*=====  End of Variables  ======*/

/*===========================
=            DOM            =
===========================*/

var caja = document.querySelector("#caja");
console.log("caja", caja);

var cajas = document.querySelectorAll(".cajas");
console.log("cajas", cajas);

caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "red";

/*=====  End of DOM  ======*/

/*=================================
=            Functions            =
=================================*/

var globalAwesome = 10;

function functionAwesome(){

    console.log("Hola");

}

functionAwesome();

function paramAwesome(numberOne, numberTwo){

    var result = numberOne + numberTwo;
    globalAwesome = result;
    console.log("result", result);

}

paramAwesome(5,7);
paramAwesome(100,7);

function returnAwesome(){
    var numberThree = 5;
    return numberThree;
}

console.log("returnAwesome", returnAwesome());

function returnParamAwesome(numberFour){
    return numberFour;
}

console.log("returnParamAwesome", returnParamAwesome(globalAwesome));


/*=====  End of Functions  ======*/

/*==================================
=            Conditions            =
==================================*/

var a = 15;
var b = 10;

if (a>b) {
    console.log("a > b");
}
else {
    console.log("Another")
}

var day = "Monday";

switch(day){
    case "Sunday":
    console.log("Sunday");
    break;
    case "Monday":
    console.log("Monday");
    break;
    default :
    console.log("Other day");
}

/*=====  End of Conditions  ======*/

/*==============================
=            Cicles            =
==============================*/

for(var i = 0; i <= 5; i++){
    console.log("i", i);
}

var n = 0;

while(n <= 5){
    console.log("n", n);
    n++;
}

var p = 0;
do{
    console.log("p", p);
    p++;
}
while(p <= 5);

var cajas = document.querySelectorAll(".cajas");
console.log("cajas", cajas);

for (var i = 0; i < cajas.length; i++) {
    cajas[i].style.width = "50px";
    cajas[i].style.height = "50px";
    cajas[i].style.background = "blue";
    cajas[i].style.marginTop = "5px";
    cajas[i].style.marginRight = "5px";
    cajas[i].style.display = "inline-block";
}

/*=====  End of Cicles  ======*/

/*==============================
=            Events            =
==============================*/

var squareAwesome = document.querySelector("#squareAwesome")

    /*====================================
    =            Event in DOM            =
    ====================================*/

    function changeColor(){
        squareAwesome.style.background = "red";
    }

    /*=====  End of Event in DOM  ======*/

    /*===================================
    =            Event in JS            =
    ===================================*/

    var buttonOne = document.querySelector("#buttonOne");

    buttonOne.addEventListener("click", moveSquare)

    function moveSquare(){
        squareAwesome.style.width = "500px";
        squareAwesome.style.transition = "1s width ease";
    }

    /*=====  End of Event in JS  ======*/

/*=====  End of Events  ======*/

/*============================================
=            Intervals and Delays            =
============================================*/

var time = document.querySelector("#time");
var seconds = 0;

var intervalFunction = setInterval(function(){

    seconds++;
    time.innerHTML = seconds;

},1000);

setTimeout(function(){
    
    clearInterval(intervalFunction);

    alert("Done Time");
},5000);

/*=====  End of Intervals and Delays  ======*/

/*======================================
=            Random numbers            =
======================================*/

var randomNumber = document.querySelector("#randomNumber");
var number = 0;

number = Math.round(Math.random()*1000);
randomNumber.innerHTML = number;

/*=====  End of Random numbers  ======*/

/*==============================
=            Concat            =
==============================*/

var name = "Izma";
console.log("My name is "+name);

/*=====  End of Concat  ======*/

