import PokemopnList from "../PokemonList/PokemonList";
import Search from "../Search/Search";


import './Pokedex.css';


function Pokedex () {
      
     return (
        <div className="pokedex-wrapper">
            <Search />
            <PokemopnList />
        </div>
     )
}


export default Pokedex;