import { lolfilter, lolBuscar, lolOrdenar, lolOrdenarEstad} from './data.js';
import lol from './data/lol/lol.js';

const lolChampions = Object.values(lol.data)
const containerCard=document.querySelector("#container-card");
const containerEstadistica = document.getElementById('div2');
const inputBuscar = document.getElementById("buscar")
const selectChampion = document.querySelector('#selectChampion')
const ordenarChampion = document.querySelector('#ordenar')
const estadistica = document.getElementById('estadistica')
//------------------------------------------------------Buscar por nombre de campeon--------------------------------------------------
inputBuscar.addEventListener('keyup',()=>{
let rst = []
let  buscar = inputBuscar.value.toUpperCase()
LimpiarTarjetas()
if(buscar){
  rst = lolBuscar(lolChampions,buscar)
  }
else {
  rst  =  lolChampions;
} 
MostrarChampions(rst)
});
//----------------------------------------Filtrado por Typo de campeon------------------------------------
let rst =[];
selectChampion.addEventListener('change',(e)=>{
//let rst =[]
  // const select = selectChampion.value
  LimpiarTarjetas()

  if(e.target.value === 'all')
    rst  =  lolChampions
  else{
    rst = lolfilter(lolChampions, e.target.value);  
  }

  MostrarChampions(rst)
})
//----------------------------CALCULO------------------------------------------------
estadistica.addEventListener('click', ()=> {
  containerCard.style.display="none";
  containerEstadistica.style.display="flex";
  containerEstadistica.innerHTML="";
  const hp = lolOrdenarEstad(rst);
  [hp[0],hp[hp.length -1]].forEach((valor) => {
    const cardEsta=document.createElement('div');
    cardEsta.classList.add('cardEstadis');
    
    let imagen = valor.splash;
    let nombre = valor.name;
    let vida = valor.stats.hp;
    let mana = valor.stats.mp;
    let armor = valor.stats.armor;
    let cardEstadistica = 
    `
      <figure>
        <img src="${imagen}">
      </figure>
      <div class="datoCardEsta">
        <h3><strong>${nombre}</strong></h3>
        <p>HP:  ${vida} </p>
        <p>MP:  ${mana} </p>
        <p>ARMOR:  ${armor} </p>
      <!--<a href="#">Leer Màs</a>-->
      </div>
    `
    cardEsta.innerHTML=cardEstadistica;
    containerEstadistica.appendChild(cardEsta)
  });
});  
//----------------------------Ordenar A-Z---Z-A------------------------------------------------
ordenarChampion.addEventListener('change', (o) => {
  let ord = []
  ord = lolOrdenar(lolChampions,o.target.value) 
  //console.log(o.target.value);
  MostrarChampions(ord)
})
//------------------------------------Mostrar Campeones---------------------------------------
const MostrarChampions = (lolChampions)=>{
  containerCard.innerHTML=''
  //const stadistica = calculo(lolChampions)
  for (let i = 0; i < lolChampions.length; i++) {  
    const championCard=document.createElement('div');
    championCard.classList.add('card');
    const img = lolChampions[i].splash;
    const name = lolChampions[i].name;
    const attack = lolChampions[i].info.attack;
    const defense = lolChampions[i].info.defense;
    const magic = lolChampions[i].info.magic;
    const difficulty = lolChampions[i].info.difficulty;
    let cardChampions=
    ` 
    <figure>
        <img src="${img}">
      </figure>
      <div class="contenido-card">
          <h3><strong>${name}</strong></h3>
          <p>Attack: ${attack} </p>
          <p>Defense: ${defense}</p>
          <p>Magic:${magic}</p>
          <p>Difficulty: ${difficulty}</p>
        <!--<a href="#">Leer Màs</a>-->
      </div>
    `
    championCard.innerHTML=cardChampions;
    containerCard.appendChild(championCard);
    }
  }

//-----------------------------------------------------------------------------------------
function LimpiarTarjetas(){
  let cards = Array.prototype.slice.call(document.querySelectorAll('card-Limpiar'),0)//getElementsByClassName
  for(let card of cards){
    card.remove() 
  }
}
//-----------------------------------------------------------------------------------------
window.onload = function(){
  document.getElementById("div2").style.display="none";
  //mostrar(lolData)
  MostrarChampions(lolChampions)
}