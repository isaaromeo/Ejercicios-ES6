// Usando la función anterior beneficiate de poder conocer el indice del array 
// para crear una función llamada removeItem que pasandole un array y un texto 
// como parametros (los mismos parametros que en el anterior ejercicio) llame a 
// la función anteriormente creada findArrayIndex y obten el indice para 
// posteriormente usar la función de javascript .splice() para eliminar el 
// elemento del array.

// Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan 
// correctamente.

const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];
  
  function findArrayIndex(array, text){
      let index;
      for(let i = 0; i < array.length; i++){
          if(array[i] === text){
              index = i;
          }
      }
      if(index === undefined){
        index = false;
      }
      
      return index;
  }

  function removeItem(array, text){

    let index = findArrayIndex(array,text);
    if(!index){ 
        console.log("El texto que intenta borrar no se encuentra en el array introducido")
        return index;
    }
    else {
        array.splice(index, 1);
        return array;
    }

   
    }
    

  console.log(removeItem(mainCharacters, 'Anakin'))
  console.log(removeItem(mainCharacters, 'Han Solo'))
  console.log(removeItem(mainCharacters, 'Patata'))