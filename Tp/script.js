let lista = [];
let numero = [];
let posicion = [];
let cantidadJugadoresRestantes = 26








function agregar(jugador, number, pos)

{
    
if(cantidadJugadoresRestantes>0)
{
number = document.getElementById("numero")
pos = document.getElementById("posicion")
jugador = document.getElementById("jugador");
lista.push(jugador.value);
numero.push(number.value);
posicion.push(pos.value);
cantidadJugadoresRestantes--;

}

else
{

alert('Se ha alcanzado los 26 jugadores');

}


}











function limpiar()

{
numero = numero.splice(0, numero.length);
posicion = posicion.splice(0, posicion.lenght);
lista = lista.splice(0, lista.lenght); 
cantidadJugadoresRestantes = 26


}




function finalizar()
{

let convocados = document.getElementById("convocados");
convocados.innerHTML = "";
lista.forEach((lista) => {
    const li = document.createElement("li");
    li.textContent = lista + " pos:" + posicion + " num:" + numero;
    convocados.appendChild(li);





});


}

