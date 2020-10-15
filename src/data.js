export function lolfilter (arrayChampions, condition) {
  console.log(arrayChampions.filter(champion => champion.tags.includes(condition))); 
  return arrayChampions.filter(champion =>  champion.tags.includes(condition)) 
}
  
export function lolBuscar (arrayChampions, condition) {
  console.log(arrayChampions.filter(champion => champion.name.toUpperCase().includes(condition)));
  return arrayChampions.filter(champion => champion.name.toUpperCase().includes(condition))
} 

export function lolOrdenar (arrayChampions, condition) {
  if(condition ==='Z-A'){
    return  arrayChampions.sort(function (A, Z) {
      if (A.name < Z.name) {
        return 1
      } else if (Z.name < A.name) {
        return -1
      }
		})  	
  } else {
    return  arrayChampions.sort(function (A, Z){
      if (A.name > Z.name) {
        return 1
      } else if (Z.name > A.name) {
        return -1
      }
    })  
  }
}

export function lolOrdenarEstad (arrayChampions) {
  return arrayChampions.sort((A, Z) => {
    if (A.stats.hp < Z.stats.hp) {
      return 1
    } else if (Z.stats.hp < A.stats.hp) {
      return -1
    }
    return 0; 
  })  
}
 