import { filter } from './data.js';

import data from './data/lol/lol.js';




/*const LOLData = data.lol;


console.log('cantidad:' + LOLData.length);*/
//function mostrar todos los campeones

for (const [key, value] of Object.entries(data.data)) {
    let id = value.id;
    console.log(id);
    let img = value.img;
    console.log(img);
    let infoAttack = value.info.attack;
    console.log(infoAttack);
    let infoDefense = value.info.defense;
    console.log(infoDefense);
    let infoMagic = value.info.magic;
    console.log(infoMagic);
    let infoDifficulty = value.info.difficulty;
    console.log(infoDifficulty);


    const infoChampions = document.getElementById("information");
    const containerHero = document.createElement("div");
    containerHero.className = "containerHero";
    const nameHero = document.createElement("p");
    nameHero.innerHTML = id
    nameHero.className = "nameChampions";
    containerHero.appendChild(nameHero);

    const newDivImg = document.createElement("img");
    newDivImg.setAttribute("src", img);
    newDivImg.setAttribute("width", "150");
    newDivImg.setAttribute("height", "150");
    containerHero.appendChild(newDivImg);

    const newDivAttack = document.createElement("p");
    newDivAttack.innerHTML = "<span style = 'color:green; font-weight: bolder;'>  Attack: </span>" + infoAttack;
    newDivAttack.className = "aboutInfo";
    containerHero.appendChild(newDivAttack);

    const newDivDefense = document.createElement("p");
    newDivDefense.innerHTML = "<span style = 'color:green; font-weight: bolder;'> Defense: </span>" + infoDefense;
    newDivAttack.className = "aboutInfo";
    containerHero.appendChild(newDivDefense);

    const newDivMagic = document.createElement("p");
    newDivMagic.innerHTML = "<span style = 'color:green;font-weight: bolder;'> Magic: </span>" + infoMagic;
    newDivAttack.className = "aboutInfo";
    containerHero.appendChild(newDivMagic);

    const newDivDifficulty = document.createElement("p");
    newDivDifficulty.innerHTML = "<span style = 'color:green;font-weight: bolder;'> Difficulty: </span>" + infoDifficulty;
    newDivAttack.className = "aboutInfo";
    containerHero.appendChild(newDivDifficulty);


    infoChampions.appendChild(containerHero);
    /*const newDivName = document.createElement("p");
    newDivName.innerHTML = id;
    document.getElementById("AllChampions").appendChild(newDivName);*/

    // document.querySelector("#AllInfoChampions").innerHTML += info

};

function typeFilter(event) {
    console.log(event.target.id)
}

// querySelectorAll arreglo con los elmentos coincidad 
let btnFilter = document.querySelectorAll('.btnFilter')

// recorremos el arreglo para asignar el evento
for (let i = 0; i < btnFilter.length; i++) {
    btnFilter[i].addEventListener('click', typeFilter)
}

/*const newDivInfo = document.createElement("text");
newDivName.innerHTML = info;
document.getElementById("AllInfoChampions").appendChild(newDivInfo);*/








/*for (let value of Object.values(data)) {
    console.log(data.data);

    for (let i = 0; i < 7; i++) {
        let id = data.data[i].id;
        console.log(id);
    }

}*/




//let newData = data.lol.type;

//console.log(newData);
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
/*for (var [key, value] of Object.entries(data.data)) {
    console.log(key + value.id + value.img + value.tags + value);}*/

//console.log(data.data.length);


/*const rectangle = document.getElementById("rectangle");
const nameLogo1 = document.getElementById("nameLogo1");
//Para ocultar la primera pantalla
play.addEventListener("click", () => {
    // alert('Click')
    logo.classList.add("ocultar");
    play.classList.add("ocultar");
    userName.classList.add("ocultar");
    hello.classList.remove("ocultar");
    showName.classList.remove("ocultar");

    nameLogo1.classList.remove("ocultar");

})

let letsPlay = document.getElementById("play");
letsPlay.addEventListener("click", () => {
    let names = document.getElementById("userName").value;
    let userNames = names;
    document.getElementById("showName").innerHTML = userNames;
    return userNames
});*/