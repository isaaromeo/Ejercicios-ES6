// Crea una función llamada swap que reciba un array y dos parametros que sean 
// indices del array. La función deberá intercambiar la posición de los valores de 
// los indices que hayamos enviado como parametro. Retorna el array resultante.

// Sugerencia de array:

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

swapItems = (array, i1, i2) => {

    let newArray = [...array];
    const indexes = [i1, i2];
    indexes.sort((a,b) => b - a);
    let swapIndex;


    for(const index of indexes){
        swapIndex = indexes.find(n => n != index)
        newArray.splice(index, 1, array[swapIndex])
        
    }

    return newArray;
}

console.log(swapItems(fantasticFour, 0, 2))
