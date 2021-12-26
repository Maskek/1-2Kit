"use strict";
window.onload = ButtonStart;

function ButtonStart(){
    var button = document.getElementById("Butt")
    button.onclick = Equality;
}

function Equality() {
    var a = Number(document.getElementById("valA").value);
    var b = Number(document.getElementById("valB").value);
    var c = Number(document.getElementById("valC").value);
    var x1, x2;
    if (a == 0){
      alert("Введено неверное значение для a");
    }
    else{
      var d = a * a - 4 * b * c;
      if (d > 0){
        x1 = (-b + Math.sqrt(d))/(2 * a);
        x2 = (-b - Math.sqrt(d))/(2 * a);
        alert(`x1 = ${x1}, x2 = ${x2}`)
      }
      else if (d == 0) {
        x1 = Math.sqrt(d)/(2*a);
        alert(` x1, x2 = ${x1},`)
      }
      else{
        alert(`Уравнение не имеет корней`)
      }
    }
}