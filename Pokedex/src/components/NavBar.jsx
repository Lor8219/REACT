function NavBar({pokemonIndex, setPokemonIndex, pokemonList}){
 
  const handlePreviewClick =() => {
    if (pokemonIndex>0){
    setPokemonIndex (pokemonIndex -1);
  }
};
  
  const handleNextClick =() => {
    if (pokemonIndex < pokemonList.length - 1) {
    setPokemonIndex (pokemonIndex + 1)
  }
}
 

  return(
    <div>
      <button onClick={handlePreviewClick}>précédent</button>
      <button onClick={handleNextClick}>suivant</button>
    </div>
  )
}

export default NavBar;