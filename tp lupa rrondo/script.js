let lista = [];
let cantidadJugadoresRestantes = 26








function agregar(jugador)

{
    console.log(lista.lenght);
if(cantidadJugadoresRestantes>0)
{
jugador = document.getElementById("jugador");
lista.push(jugador.value);
console.log(lista);
cantidadJugadoresRestantes--;
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

let convocados = document.getElementById('convocados');
for(i=0 ; i< lista.lenght ; i++)
{
let i = 26;
let convocado = document.getElementById(i);
convocado.innerHTML = lista.pop;
i--;



}

}