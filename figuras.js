// codigo del cuadrado

console.group("cuadrado");
const ladoCuadrado = 10;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`Perimetro del cuadrado : ${perimetroCuadrado} cm`);

const areaCuadrado = ladoCuadrado**2 ;
console.log(`area del cuadrado : ${areaCuadrado} cm^2`);
console.groupEnd();

// codigo del triangulo

console.group("triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden: " 
    + ladoTriangulo1 
    + " cm, "
    + ladoTriangulo2
    + " cm, "
    + baseTriangulo
    + " cm"
);
const alturaTriangulo = 5.5;
console.log(`Altura del triangulo : ${alturaTriangulo} cm`);
const perimetrotriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`Perimetro del triangulo : ${perimetrotriangulo} cm`);

const areatriangulo =  (baseTriangulo * alturaTriangulo) / 2;
console.log(`area del triangulo : ${areatriangulo} cm^2`);

console.groupEnd();

// codigo del circulo

console.group("circulo");
const radioCirculo = 4;
console.log(`radio del circulo : ${radioCirculo} cm`);
const diametroCirculo = radioCirculo*2;
console.log(`diametro del circulo : ${diametroCirculo} cm`);
const PI = Math.PI;

const perimetroCirculo = diametroCirculo*PI;
console.log(`perimetro del circulo : ${perimetroCirculo} cm`);
const areaCirculo = PI*(radioCirculo**2);
console.log(`area del circulo : ${areaCirculo} cm^2`);


console.groupEnd();