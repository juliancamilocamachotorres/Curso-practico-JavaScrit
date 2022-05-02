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
function perimetrotriangulo(lado1,lado2,base){
    return lado1 + lado2 + base; 
}  
//console.log(`Perimetro del triangulo : ${perimetrotriangulo} cm`);

function areatriangulo(base,altura){
    (base * altura) / 2;
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