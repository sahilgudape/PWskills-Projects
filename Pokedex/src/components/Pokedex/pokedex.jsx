import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PokemonList from "../PokemonList/pokemonlist";
import Search from "../Search/search";
import "./pokedex.css"
import PokemonDetails from "../pokemondetails/pokemonDetails";

function Pokedex(){
    const [searchPokemon, setSearchPokemon] = useState('');
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            setSearchPokemon('');
        }
    }, [location]);

    return(
        <div className="pokedex-wrapper">
            
            <Search updateSearchPokemon={setSearchPokemon} />
            {(searchPokemon.length==0)?<PokemonList/>:<PokemonDetails key={searchPokemon} pokemonName={searchPokemon} />}
        </div>
    )
}

export default Pokedex;