document.write("Hello world!");
function sayHello(){
  var response = prompt("What is your name?");
  alert("Hello! " + response + ", have a nice day!");
};
//sayHello();

function add(a,b){
     return a + b;
   }
   console.log(add(20,30));
   console.log(add(100,30));
add();

function showTopic(){
  var x = document.getElementById('demo');
  x.style.fontSize = "25px";
  x.style.color = "lightpink";
};
