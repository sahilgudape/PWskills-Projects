import useDebounce from "../../Hooks/debounce";
import "./search.css"

function Search({searchPokemon, updateSearchPokemon}) {

    const useDebouncedCallback = useDebounce((e)=> updateSearchPokemon(e.target.value))

    return(
        <div className="search-wrapper">
            <input 
                type="text" 
                placeholder="Search Pokemon" 
                id="pokemon-name-search" 
                value={searchPokemon} 
                onChange={ useDebouncedCallback} 
            />
        </div>
    )
}

export default Search;