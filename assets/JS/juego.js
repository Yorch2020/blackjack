/**
 * 2C = two of clubs (treboles)
 * 2D = Two fo diamonds (Diamantes)
 * 2H = Two of hearts (Corazones)
 * 2S = two of Spades (Espadas)
 */

 let deck = [];
 const tipos = ['C','D','H','S'];
 const especiales = ['A','J','Q','K'];

 // Esta funcion crea un nuevo deck o baraja
 const crearDeck= () => {

    for (let i=2; i<=10; i++) {

        for(let tipo of tipos){
            deck.push( i + tipo);

        }
      
        
         }

         for (let tipo of tipos){

            for (let especial of especiales){

                deck.push (especial + tipo);

            }

         }

  //  console.log(deck)
         deck= _.shuffle(deck);
         console.log(deck);
         return deck;
 }

 crearDeck();

// Esta funcion me permite tomar una carta

const pedirCarta= () => {

if (deck.length===0) {
    throw 'No hay caras en el deck';
}
    let carta= deck.pop();
     console.log(deck);
     console.log(carta); // Carta de la bajala 


    return  carta;


}

//pedirCarta()

// Le asigna el valor a la carta seleccionada
const valorCarta =(carta) => {

    const valor = carta.substring(0,carta.length-1);

    return ( isNaN( valor )) ? 
            (valor === 'A') ? 11 : 10
            : valor * 1;

    // let puntos = 0;

   // if(isNaN(valor )){

    //   puntos = ( valor === 'A') ? 11 :  10;
       
    // } else {
        
      //  puntos = valor * 1;
    // }

   // console.log (puntos);

}

const valor = valorCarta(pedirCarta());
console.log({valor});
