// Iteration 1: All Fire Pokemons- get the array of all (only)Fire type pokemons
function getAllFirePokemons(pokemonArray){

    const firePokemon = pokemonArray.filter(pokemon=>pokemon.type[0]==="Fire");
    return firePokemon;

}

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemonArray){

    const pokemonHeights =  pokemonArray.map(pokemon=>{
        return {
            ...pokemon,
            height:Number(pokemon.height.slice(0,5))
        }
    })

    
    if(pokemonHeights.length > 1){
          pokemonHeights.sort((a,b)=>a.height - b.height)
          return pokemonHeights[0].name
    }else{
        return 0;
    }
    
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(pokemonArray){
    if(pokemonArray.length === 0)return 0;
    const countCandy = pokemonArray.map(pokemon=>pokemon.candy_count || 0);
 //    return countCandy;
    const totalCandy = countCandy.reduce((total,sum)=>total+sum,0)
    return Math.round((totalCandy/pokemonArray.length)*100)/100
 
     
 }
// Iteration 4: images for the first 10 `Ground`  Pokemons  
function getGroundPokeImg(pokemonArray){
    if(pokemonArray.length === 0) return 0
    const groundPokemon = pokemonArray.filter(pokemon=>pokemon.type.includes("Ground")).map(pokemon=>pokemon.img)
    const groundImg = []

    for(let i = 0 ; i <10 ;i++){
        groundImg.push(groundPokemon[i])
    }

    return groundImg
 }
// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(pokemonArray){
    if(pokemonArray.length === 0) return 0;

    const pikachu = pokemonArray.find(pokemon=>pokemon.name === "Pikachu");
    const pikachuWeight = parseFloat(pikachu.weight)
  

     const otherPokemon = pokemonArray.filter((pokemon)=>{
        return parseFloat(pokemon.weight) > pikachuWeight;
    })

    return otherPokemon.map(poke=>poke.name)      

  }    
// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(pokemonArray){
    const pokemons = pokemonArray.map(p=>p.name)
    
     pokemons.sort()
    const res = [];

    if(pokemons.length > 20) {

      
      for(let i = 0 ; i < 20 ;i++ ){
        res.push(pokemons[i])
      }
      return res
    }

    return pokemons
      
  }
// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 

function strongPokemons(pokemonArray){
    const Strong = pokemonArray.filter(p=>p.weaknesses.length === 1).map(p=>p.name)
    const res = [];
    for(let i = 0; i <= 14 ;i++){
res.push(Strong[i])
    }

    return res
      
  }