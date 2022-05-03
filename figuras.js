// codigo del cuadrado

console.group("cuadrado");
const ladoCuadrado = 10;
//console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

function perimetroCuadrado(lado){
    return lado * 4;
} 
//console.log(`Perimetro del cuadrado : ${perimetroCuadrado} cm`);

function areaCuadrado(lado){
    return lado**2;
}
//console.log(`area del cuadrado : ${areaCuadrado} cm^2`);
console.groupEnd();

// codigo del triangulo

console.group("triangulo");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

/*console.log("Los lados del triangulo miden: " 
    + ladoTriangulo1 
    + " cm, "
    + ladoTriangulo2
    + " cm, "
    + baseTriangulo
    + " cm"
);*/
//const alturaTriangulo = 5.5;
//console.log(`Altura del triangulo : ${alturaTriangulo} cm`);
function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base; 
}  
//console.log(`Perimetro del triangulo : ${perimetrotriangulo} cm`);

function areaTriangulo(base,altura){
    return (base * altura) / 2;
}
//console.log(`area del triangulo : ${areatriangulo} cm^2`);

console.groupEnd();

// codigo del circulo

console.group("circulo");
//const radioCirculo = 4;
//console.log(`radio del circulo : ${radioCirculo} cm`);
function diametroCirculo(radio){
    return radio*2;
} 
//console.log(`diametro del circulo : ${diametroCirculo} cm`);
const PI = Math.PI;

function perimetroCirculo(radio){
    return diametroCirculo(radio)*PI;
} 
//console.log(`perimetro del circulo : ${perimetroCirculo} cm`);
function areaCirculo(radio){
    return PI*(radio**2);
} 
//console.log(`area del circulo : ${areaCirculo} cm^2`);


console.groupEnd();


//funciones para html

//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputLado1");
    const lado1 = Number(input1.value);
    const input2 = document.getElementById("InputLado2");
    const lado2 = Number(input2.value);
    const input3 = document.getElementById("InputBase");
    const base = Number(input3.value);
    const perimetro = perimetroTriangulo(lado1,lado2,base);

    if(lado1 === lado2 && lado1 != base) {
        alert("es isosceles");
        alert(alturaIsosceles(lado1,base));
    } else{
        alert("no es isosceles");
    }
    alert(perimetro);

}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputAltura");
    const altura = Number(input1.value);
    const input2 = document.getElementById("InputBase");
    const base = Number(input2.value);
    const area = areaTriangulo(base ,altura);
    
    alert(area);
}

function alturaIsosceles(lado,base){
    const altura = Math.sqrt((lado**2)-((base/2)**2))
    return altura;
}

//Radio
function calcularPerimetroRadio(){
    const input = document.getElementById("InputRadio");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);

}

function calcularAreaRadio(){
    const input = document.getElementById("InputRadio");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}