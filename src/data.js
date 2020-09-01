 //estas funciones son de ejemplo


 import lol from "./data/lol/lol.js";
 const arrayChampions = Object.values(lol.data);


 export const filter = {

     type: function() {
         const resultLol = arrayChampions.filter((objetoCampeon) => {
             return objetoCampeon.tags.includes("Assassin");
         });
         console.log(resultLol);
         return resultLol;
     }
 };


 //console.log(filterAssassin);





 export const anotherExample = () => {
     return 'OMG';
 };