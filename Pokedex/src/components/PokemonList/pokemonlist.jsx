import Pokemon from "../Pokemon/pokemon";
import "./pokemonList.css";
import usePokemonList from "../../Hooks/usePokemonList";

function PokemonList() {
    const [pokemonListState, setPokemonListState] = usePokemonList();

    return(
        <>
        <div className="pokemonList-wrapper">
            {pokemonListState.isLoading?"Loading..." : 
            pokemonListState.pokemonList.map((p)=> <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />)
            }
            
        </div>
        <div className="pokemonList-buttons">
            <button disabled={pokemonListState.prev==null} onClick={()=> setPokemonListState({
                ...pokemonListState, 
                pokedexURL: pokemonListState.prev
            })
            }>Prev</button>
            <button disabled={pokemonListState.next==null} onClick={()=> setPokemonListState({
                ...pokemonListState, 
                pokedexURL: pokemonListState.next
                })}>Next</button>
        </div>
        </>
    )
}

export default PokemonList;