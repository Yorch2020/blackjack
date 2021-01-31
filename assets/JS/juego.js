/**
 * 2C = two of clubs (treboles)
 * 2D = Two fo diamonds (Diamantes)
 * 2H = Two of hearts (Corazones)
 * 2S = two of Spades (Espadas)
 */


 const miModulo =( ()=> {
    'use strict'

    let deck = [];
    const tipos = ['C','D','H','S'],
    especiales = ['A','J','Q','K'];
   
//    let puntosJugador = 0,
//       puntosComputadora= 0;

    let puntosJugadores= [];
   
    // Referencias del HTML
   
    const btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener'),
    btnNuevo = document.querySelector('#btnNuevo');
   
   
    const puntosHtml = document.querySelectorAll('small'),
    divCartasJugador = document.querySelector('#jugador-cartas'),
   divCartasComputadora = document.querySelector('#computadora-cartas');
    

   // Esta funcion inicializa el juego
   const inicializarJuego = ( numJugadores = 2) =>{

    deck = crearDeck();

    console.log({numJugadores});

    for ( let i =0; i< numJugadores; i++){

        puntosJugadores.push(0);

        console.log({puntosJugadores});

    }

}  
   
   
    // Esta funcion crea un nuevo deck o baraja
    const crearDeck= () => {
        deck = [];
   
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
   
                    
            return _.shuffle(deck);
    }
   
 
   
   // Esta funcion me permite tomar una carta
   
   const pedirCarta= () => {
   
   if (deck.length===0) {
       throw 'No hay caras en el deck';
   }
         
       return  deck.pop();
   
   
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
   
   //const valor = valorCarta(pedirCarta());
   //console.log({valor});
   // turno de la computadora
   
//  const acumlarPuntos () =>{
//  }


   const turnoComputadora = (puntosMinimos )=> {
   
       do {
       const carta = pedirCarta();
       puntosComputadora = puntosComputadora + valorCarta(carta);
       puntosHtml[1].innerText = puntosComputadora;
       const imgCarta = document.createElement('img');
       imgCarta.src = `assets/cartas/${ carta }.png`;
       imgCarta.classList.add('carta');
       divCartasComputadora.append(imgCarta);
   
               if (puntosMinimos > 21) {
   
                   break;
   
               }
   
   
          } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );
   
          setTimeout(() => {
              
          
          if (puntosComputadora === puntosMinimos) {
           alert('Nadie gana :(');
                
       
       } else if ( puntosMinimos > 21) {
   
           alert('Computadora gana');
   
       } else if (puntosComputadora > 21){
   
            alert ('Jugador gana');
       } else {
   
           alert (' Computadora Gana');
   
       }
   
   }, 10);
   }
   
   
   
   // Eventos
   
   btnPedir.addEventListener('click', ()=> {
   const carta = pedirCarta();
   puntosJugador = puntosJugador + valorCarta(carta);
   puntosHtml[0].innerText = puntosJugador;
   const imgCarta = document.createElement('img');
   imgCarta.src = `assets/cartas/${ carta }.png`;
   imgCarta.classList.add('carta');
   divCartasJugador.append(imgCarta);
   
   
   
   if (puntosJugador > 21){
   
   
       console.warn('Lo Siento mucho, perdite');
       btnDetener.disabled = true;
       btnPedir.disabled = true;
       turnoComputadora( puntosJugador );
   
   } else if (puntosJugador === 21) {
       btnDetener.disabled = true;
       turnoComputadora( puntosJugador );
       console.warn('21, Genial');
   
   }
   
   
   
   });
   
   btnDetener.addEventListener('click', ()=> {
   
       btnPedir.disabled = true;
       btnDetener.disabled = true;
       turnoComputadora( puntosJugador );
   
   
   
   
   
   });
   
   btnNuevo.addEventListener('click', ()=> {
      
      
      console.clear();
      inicializarJuego();
     // deck = [];
      // deck = crearDeck();
      
       btnDetener.disabled = false;
       btnPedir.disabled = false;
       puntosComputadora = 0;
       puntosJugador = 0 ;
   
       puntosHtml[0].innerText = 0;
       puntosHtml[1].innerText = 0;
   
       divCartasComputadora.innerHTML = '';
       divCartasJugador.innerHTML = '';
   
   
       
   
   });
   

return console.log('Hola mundo');

 }



 ) ();
