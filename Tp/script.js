let lista = [];
let numero = [];
let posicion = [];
let cantidadJugadoresRestantes = 26








function agregar(jugador, number, pos)

{
    
if(cantidadJugadoresRestantes>0)
{
number = document.getElementById("numero").value
if (number > 99){
    number = 99;
}

pos = document.getElementById("posicion")
jugador = document.getElementById("jugador");
lista.push(jugador.value);
numero.push(number);
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
numero = numero.splice( numero.length);
posicion = posicion.splice(0, posicion.lenght);
lista = lista.splice(0, lista.lenght); 
cantidadJugadoresRestantes = 26;

finalizar();



}




function finalizar()
{

let convocados = document.getElementById("convocados");
let listaNumeros = document.getElementById("listaNumeros");
let listaPos =  document.getElementById("listaPos");
convocados.innerHTML = "";
listaNumeros.innerHTML = "";
listaPos.innerHTML = "";
lista.forEach((lista) => {
    const li = document.createElement("li");
    li.textContent = lista;
    convocados.appendChild(li);

});

numero.forEach((numero) => {
    const li = document.createElement("li");
    li.textContent = numero;
    listaNumeros.appendChild(li);

});

posicion.forEach((posicion) => {
    const li = document.createElement("li");
    li.textContent = posicion;
    listaPos.appendChild(li);

});
  
}

