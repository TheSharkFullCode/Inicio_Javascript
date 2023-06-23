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
//-------------------------------------------------------------------->

//trabajando con Strings..................


let cadena = "soy un noob";
console.log(cadena);

cadena = "no entiendo nada";
console.log(cadena);

console.log(cadena[5]);
console.log(cadena[0]);


console.log(cadena[0]);

//console.log(cadena[0]) = a;
console.log(cadena);

//---------------------------------------------------------->



let className = ["Marcos",'Javier',"Otniel","Santi","Morales","Oscar"];

console.log(className[5]);

className[6] = "oscar";


console.log(className);



//-------------------------------------->


let personalInfo = ["Oscar","Rodriguez","managua","pedro","juan","leo"];

console.log(personalInfo[0], personalInfo[1], personalInfo[2]);

alert("Tu nombre es:"+personalInfo[0]+" "+ "y tu apellido es"+console.log(className[1])+" y la ciudad que naciste es:"+console.log(className[2]));

//--------------------------------------------------------------------->

let user = {
  name: ilikeJS
}

let fivFilms = [5,258,"oscar"];
fivFilms[0] = fivFilms[2];























//------------------------------------------------------------------>



//personalInfo[0][1][3];

//alert("Tu nombre es:"+[0]+"y tu apellido es"+[1]+"nacido en:"+[3]);

// let className = ["Morales","Santi","Javier","Otniel","Oscar"];

//let Marcos,Angel,Morales,Santi,Javier,Otniel,Oscar;

// let dato1 = "Marcos";
// let dato2 = "Otniel";
// let dato3 = "Javier";
