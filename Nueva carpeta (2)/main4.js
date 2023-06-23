function ejemplo1(){
    
    let numero01, numero02;
    let almacen = "";

    


    
    document.getElementById("pizarra").value = almacen;
    numero01 = document.getElementById("dato1").value;
    numero02 = document.getElementById("dato3").value;

    numero01 = parseInt(numero01);
    numero02 = parseFloat(numero02);

   // alert(dato);


  //document.getElementById("pizarra").value ="";

  almacen = (numero01 + numero02);
  document.getElementById("pizarra").value = almacen;
   
}











//------------------------------------------------------------------>







let name = 'dani',
 age = 32, 
 city = 'madrid',
  isMarried = true,
   years = 2023;
   let dato1 = 'error';
   let num3 = "";

console.log(typeof name);
console.log(typeof age);
console.log(typeof city);
console.log(typeof isMarried);
console.log(typeof years);

age = 41;

let value1 = ((age < years) && (city == "madrid"));
console.log(value1);

let result = ( 4 > 1)  //esta condicion es verdadera:
    console.log(result);


let dani = ( 8 != years);
console.log(dani); 
//-------------------------------------------------->


let numero = (dato1 === age);
console.log(numero);

let caja = (5 >= 20)
console.log(caja);

let save = (2 === 0);
console.log(save);

//-------------------------------------------------->

let side = 4;
let squareArea = side**2;
console.log(squareArea);

//-------------------------------------------------->



let a = 2, b = 3, c = 4;

let tringleperimetle = a + b + c;

console.log(tringleperimetle);


//-------------------------------------------------->

let PI = 3.141592;
let radius = 7;
let circleArea = PI * radius**2; 
console.log(circleArea);

//(6)-------------------------------------------------->

let circunference = 2 * PI * radius;
console.log(circunference);

let num = 5;
 num += 10;
 console.log(num);

 num -= 2;

//----------------------------------------->








