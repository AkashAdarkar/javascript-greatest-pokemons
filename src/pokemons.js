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
    const countCandy = pokemonArray.map(pokemon=>pokemon.candy_count || 0);
 //    return countCandy;
    const totalCandy = countCandy.reduce((total,sum)=>total+sum,0)
    return Math.round((totalCandy/pokemonArray.length)*100)/100
 
     
 }
// Iteration 4: images for the first 10 `Ground`  Pokemons  

// Iteration 5: Find all pokemon names heavier than Pikachu

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
