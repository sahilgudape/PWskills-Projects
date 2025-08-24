import Icons from "./icons";

function Card ({player, index, onPlay, gameEnd}){
    let icons = <Icons />
    if(player=='O'){
        icons = <Icons name='circle' />
    } else if(player=='X'){
        icons = <Icons name='cross' />
    }
    return(
        <div className="card" onClick={()=> !gameEnd && onPlay(index)}>
            {icons}
        </div>
    )
}

export default Card;