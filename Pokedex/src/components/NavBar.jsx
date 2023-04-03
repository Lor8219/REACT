function NavBar({pokemonIndex, setPokemonIndex, pokemonList}){
  const handleClickSet=(pokemonIndex)=>{
    setPokemonIndex(pokemonIndex);
  };
 
//   const handlePreviewClick =() => {
//     if (pokemonIndex>0){
//     setPokemonIndex (pokemonIndex -1);
//   }
// };
  
//   const handleNextClick =() => {
//     if (pokemonIndex < pokemonList.length - 1) {
//     setPokemonIndex (pokemonIndex + 1)
//   }
// }

  return(
    <div>
    {pokemonList.map((pokemon,pokemonIndex)=>(
      <button key={pokemon.name} onClick={()=> handleClickSet(pokemonIndex)}>
        {pokemon.name}</button>
    ))
    }
    </div>
    );
    }
  
export default NavBar;