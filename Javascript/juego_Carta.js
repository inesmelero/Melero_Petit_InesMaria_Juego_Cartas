/*Primero, hago un array llamado imagenes al que incluyo todas las fotos de los pilotos */

var imagenes = ["alonso.jpg", "Checo.jpg", "Hamilton.jpg", "Leclerc.jpg", "Verstappen.jpg", "Sainz.jpg","alonso.jpg", "Checo.jpg", "Hamilton.jpg", "Leclerc.jpg", "Verstappen.jpg", "Sainz.jpg"];

var comparativa=[];
var comparativa_id=[];
var intentos=0;
var acierto=0;
var nombre;
var url;
var incrementar=20;

/*Esta funcion sirve para que las cartas se me mezclen aleatoriamente y no salgan ordenadas como en el array. Asi, siempre
que empieces una partida las vas a tener desordenadas */

function repartircartas(){

        imagenes.sort(() => Math.random()-0.5);

}

/*En esta funcion lo que hacemos es darle la vuelta a la carta. Por cada carta que seleccionamos, obtienes su id y le asocias 
una imagen en base a su id dentro de mi array llamado imagenes. En comparativa guardo el nombre de la imagen y en comparativa_id
su id de la primera y segunda carta seleccionada. Una vez que ya he clickeado en dos cartas, llamo a la funcion comparar poniendo un
retraso de medio segundo para que en el caso de que no sean iguales, se pueda ver el flip de la imagen correctamente y no
demasiado rapido*/

function cambiarCarta(numero_carta){

            var carta = document.getElementById(numero_carta);
            if(carta.src.includes("reverso")){
            
            carta.src=imagenes[numero_carta];

            comparativa.push(carta.src);
            comparativa_id.push(carta.id);           

            if (comparativa_id.length==2){
                setTimeout(comparar,500);

            }
            }

}

/*La funcion comparar lo que hace es que te compara que la posicion 0 del array y la 1 sean iguales, es decir, que sean la misma pareja.
Si lo es, te guarda el acierto y cuando encuentres las 6 parejas te aparecen fuegos artificiales, señal de que la has encontrado todas.
Si la posicion 0 del array y la 1 no son iguales, se le da la vuelta y te suma un intento. Si agotas los 20 intento y no das ni una, 
el juego termina */

function comparar(){

    const id1 = comparativa[0];
    const id2 = comparativa[1];

    const id3 = comparativa_id[0];
    const id4 = comparativa_id[1];

    if (id1==id2){
        comparativa=[];
        comparativa_id=[];
        acierto++;

        if (acierto==6){
            fuegosartificiales();

        }

    }

    else{
        const carta1 = document.getElementById(id3);
        const carta2 = document.getElementById(id4);
        carta1.src="reverso.jpg";
        carta2.src="reverso.jpg";        
        comparativa=[];
        comparativa_id=[];
        intentos++;
        document.getElementById('vidas').innerHTML = "Intentos: "+intentos+"/20";

        if(intentos==20){
            finjuego();
        }
    }


}

/*Funcion que te permite una vez que has fallado los 20 intentos, te salga un mensaje diciendote que el juego termina. LLamo a la funcion reiniciar
que te recarga la pagina html para que puedas volver a jugar.*/

function finjuego(){

    alert("FIN DEL JUEGO");
    reiniciarjuego();

}


/*Funcion que hace que sale un mensaje de enhorabuena y los fuegos cuando encuentras todas las parejas */

function fuegosartificiales(){
    document.getElementById('fuegos').innerHTML='<div class="firework"></div>';
    alert("ENHORABUENA!!");
    ranking();
}


/*Funcion que  recarga la pagina, reinicia el juego, en otras palabras. */

function reiniciarjuego(){

    window.location.reload();

}



/*Funcion para crear el ranking, pediremos el nombre de usuario que ha jugado y la url de una imagen */

function ranking(){

    //document.getElementById("formulario").innerHTML='<form id="formulario"><h1 style="color:white">RANKING</h1><a style="color:white"> Nombre:</a><input type="text" ><br><br><a style="color: white">URL: </a><input type="text" ><br><br><button>REGISTRAR</button></form>'
    
}

function añadirregistro(){


    nombre=document.getElementById("nombre").value;
    url=document.getElementById("url").value;

    // Selecciona el elemento <ol> por su ID
  var lista = document.getElementById("listaordenada");

  // Crea un nuevo elemento <li>
  var nuevoElemento = document.createElement("li");

  // Agrega un ID único al nuevo elemento <li>
  var nuevoID = "elemento" + incrementar;
  nuevoElemento.setAttribute("id", nuevoID);

  // Incrementa el contador para el siguiente ID único
  

  // Agrega contenido al nuevo elemento <li>
  var contenido = document.createTextNode(nombre);
  nuevoElemento.appendChild(contenido);

  // Agrega el nuevo elemento <li> al <ol> seleccionado
  lista.appendChild(nuevoElemento);

  var imagen = document.getElementById("elemento" +incrementar);
  imagen.src=url;

  incrementar++;
  
}
