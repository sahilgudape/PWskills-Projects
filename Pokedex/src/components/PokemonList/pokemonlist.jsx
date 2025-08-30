import { useEffect, useState } from "react";
import axios from "axios"
import Pokemon from "../Pokemon/pokemon";
import "./pokemonList.css";

function PokemonList() {

    // let [pokemonList, setPokemonList] = useState([]); // passing empty array to pokemonList
    // let [isLoading, setIsLoading] = useState(true); // keeping isLoading true
    // let [pokedexURL,setPokedexURL] = useState("https://pokeapi.co/api/v2/pokemon");

    // let [next,setNext] = useState('');
    // let [prev, setPrev] = useState('');

    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isLoading : true,
        pokedexURL: "https://pokeapi.co/api/v2/pokemon",
        next: '',
        prev: ''
    })

    async function downloadPokemon(){

        // setIsLoading(true);
        setPokemonListState((state)=>({
            ...state,
            isLoading:true
        }))

        // fetching an url using axios
        // const response = await axios.get(pokedexURL);        
        const response = await axios.get(pokemonListState.pokedexURL);       

        // storing the response data in the pokemonResults
        const pokemonResults = response.data.results;

        // setNext(response.data.next);
        // setPrev(response.data.previous);
        setPokemonListState((state)=>({
            ...state, 
            next:response.data.next, 
            prev: response.data.previous
    }));

        // iterating over each of the data from the list and storing it as a promise
        const promiseResult = pokemonResults.map((pokemon)=> axios.get(pokemon.url));

        // Storing the data as a axios response which keeps every details of that object
        const pokemonData = await axios.all(promiseResult);

        console.log(pokemonData);
        
        // fetching only the important and the data needed and storing it in a variable
        const res = pokemonData.map((pokedata)=>{
            const pokemon = pokedata.data;
            return {
                id : pokemon.id,
                name: pokemon.name, 
                image: pokemon.sprites.other.dream_world.front_default, 
                types: pokemon.types
            };
        })

        // not needed, just to check whether we are getting a visualized data
        console.log(res);

        // paasing the res to the pokemonList
        setPokemonListState((state)=>({
            ...state, 
            pokemonList:res, 
            isLoading:false
        }));
        // setIsLoading(false);
        // setPokedexURL(res);
    }
    
    // useEffect(()=>{
    //     downloadPokemon();
    // },[pokedexURL])
    useEffect(()=>{
        downloadPokemon();
    },[pokemonListState.pokedexURL])

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