import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./pokemonDetails.css"

function PokemonDetails({ pokemonName }) {
    let { id } = useParams();
    const [pokemon, setPokemon] = useState({ types: [] });
    async function downloadPokemon() {
        try {
            let response;
            if (pokemonName) {
                response = await axios.get(`http://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            } else {
                response = await axios.get(`http://pokeapi.co/api/v2/pokemon/${id}`);
            }
            setPokemon({
                name: response.data.name,
                image: response.data.sprites.other.dream_world.front_default,
                height: response.data.height,
                weight: response.data.weight,
                types: response.data.types.map((t) => t.type.name)
            })
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        downloadPokemon();
    }, [])

    return (
        <div className="pokemon-details-wrapper">
            <div className="pokemon-card">
                <img src={pokemon.image} alt="#" />
                <div className="details">
                    <h3>Name:  <span>{pokemon.name}</span></h3>
                    <div className="hw">
                        <h3>Height: <span>{pokemon.height}</span></h3>
                        <h3>Weight: <span>{pokemon.weight}</span></h3>
                    </div>
                    <div className="types">
                        {pokemon.types.map((t) => <p key={t}>{t}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonDetails;