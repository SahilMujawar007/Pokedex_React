/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from 'axios';
import './PokemonList.css'
import Pokeshow from "../Pokeshow/Pokeshow";


function PokemopnList () {

        const [pokemonList, setPokemonList] = useState([]);
        const [isLoading, setISLoading] = useState(true);
         
        const [pokedexUrl, setPokedexUrl] = useState("https://pokeapi.co/api/v2/pokemon")

        const [nextUrl, setNextUrl] = useState('');
        const [prevUrl, setPrevUrl] = useState('');
        

        async function downloadPokemons  () {

            setISLoading(true);

            const response = await axios.get(pokedexUrl);
            const pokemonResults = response.data.results;

            setNextUrl(response.data.next);
            setPrevUrl(response.data.previous);

            const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
            const pokemonData = await axios.all(pokemonResultPromise);


            const pokeListResult = pokemonData.map((pokeData) => {
                const pokemon = pokeData.data;
                return { 
                     id: pokemon.id,
                     name: pokemon.name,
                     image: pokemon.sprites.other.dream_world.front_default,
                     type: pokemon.types } 
            });
            console.log(pokeListResult);
            setPokemonList(pokeListResult);
            setISLoading(false);
        }

        useEffect(() => {
            downloadPokemons();
        }, [pokedexUrl]);
 


        return (
            <div className="pokemon-list-wrapper">

                <div className="pokemon-wrapper">
                    {(isLoading) ? 'Loading....' : 
                    pokemonList.map((p)=> <Pokeshow name={p.name} image={p.image} types={p.types} key={p.id} id={p.id}/>) 
                    }
                </div>
                <div className="controls">
                    <button disabled={prevUrl == null} onClick={() => setPokedexUrl(prevUrl)}>Prev</button>
                    <button disabled= {nextUrl == null} onClick={() => setPokedexUrl(nextUrl)}>Next</button>
                </div>

            </div>
        )
}



export default PokemopnList;