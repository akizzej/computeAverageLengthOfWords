/*Escriba una función 'computeAverageLengthOfWords' que recibe dos strings y devuelve el promedio de la longitud de ambos strings.

Ejemplo de entrada:

var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6*/
function computeAverageLengthOfWords(word1, word2){
    //se declara funcion 
    word1 = word1.length;
    word2 = word2.length;
    return (word1+word2) /2
}
console.log(computeAverageLengthOfWords("mama", "paralelepipedo"));//retorna 9