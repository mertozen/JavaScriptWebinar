
/*
var Person = {

name: 'Bora',
Surname: 'Kasmer',
Sex: 'Male',

Parent: {
Mother: 'Ozlem',
Father: 'Erdinc',
TCNO:343434343
}

}

WriteName();
console.log(say);
function WriteName() {
    console.log( Person.name + ' ' + Person.Surname);
}

var say = 'Wellcome To Webinar';
*/

/* function b() {

    console.log(myVar);
}

function a() {
    
    console.log(myVar);
    var myVar;
    b();
}
var myVar = 1;
a();
console.log(myVar);
*/

/*
function a() {
    function b()
    {
        console.log(myVar);
    
    }
    myVar = 2;
    b();
}

var myVar = 1;
a();
b();
*/

/*
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {}
    console.log("Action Finished");
        
}

function clickHandler() {
    console.log("click event");
}

document.addEventListener('click',clickHandler);
waitThreeSeconds();
console.log("Finish Execution");
*/

/*
function Hello(name) {
    var name = name || 'Mert';
    console.log("Hello "+name );
}

Hello();
Hello("Duru");
Hello(0);
*/


/*
var callFunction = function(a){

    console.log(a);
}

callFunction.Name = 'Mert Özen';
callFunction(5);
console.log(callFunction.Name);
*/
/*
var callFunction = function (a)
{
  a();

}

callFunction(function() {

var webinar = {

    Unit:'JavaScript',
    Speaker:'Mert Özen'
}
console.log(webinar.Speaker);
console.log(webinar.Unit);
});

*/

var  b = function (){

console.log(this);

}

var c = {
name:'First Name',
log: function (){
this.name  = 'C object name Updated';
console.log(this);
var updateIsim = function (_name){
console.log(this);
this.name = _name;

}

updateIsim('Bora');
console.log(this);

}
}

b();
c.log();
console.log(this);






