import "./pokemon.css"
import { Link } from "react-router-dom"

function Pokemon({name,image,id}){
    return(
        <Link to={`/pokemon/${id}`}>
        <div className="pokemon-wrapper">
            <h2>{name}</h2>
            <img src={image} alt="#" />
        </div>
        </Link>
    )
}

export default Pokemon;