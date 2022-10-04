const url = 'https://pokeapi.co/api/v2/pokemon'
export  const GetAll = ()=>{
    let pokemon = [] ;
     fetch(url)
    .then(res => res.json())
    .then(res => {pokemon = res.results})
    .catch(err => console.log(err))

     console.log(pokemon);
}
