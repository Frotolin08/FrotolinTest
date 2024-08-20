let lista = [];
let cantidadJugadoresRestantes = 26








function agregar(jugador)

{
    
if(cantidadJugadoresRestantes>0)
{
jugador = document.getElementById("jugador");
lista.push(jugador.value);
console.log(lista);
cantidadJugadoresRestantes--;
console.log(lista.lenght);
}

else
{

alert('Se ha alcanzado los 26 jugadores');

}


}











function limpiar()

{

lista = lista.splice(0, lista.lenght); 
cantidadJugadoresRestantes = 26


}




function finalizar()
{

let convocados = document.getElementById("convocados");
convocados.innerHTML = "";
lista.forEach((lista) => {
    const li = document.createElement("li");
    li.textContent = lista;
    convocados.appendChild(li);





});


}

