import { useState } from "react";
import isWinner from "../helpers/helper";
import Card from "./card";

function Grid ({numberOfBox}){
    let [board,setBoard] = useState(Array(numberOfBox).fill(""));
    const [turn,setTurn] = useState(true);
    const [winner,setWinner] = useState(null);
    let [count,setCount] = useState(0);

    function play(index){
        if(turn==true){
            board[index]="O";
        } else {
            board[index] = "X";
        }

        const win = isWinner(board,turn?"O":"X");
        if(win){
            setWinner(win)
        }

        setBoard([...board])
        setTurn(!turn)
        setCount(count+1);
    }

    function reset(){
        setBoard(Array(numberOfBox).fill(""));
        setTurn(turn);
        setWinner(null);
        setCount(0);
    }

    return (
        <div className="wrapper">
            <h1 className="turn-highlight">Current turn: {(turn)?"O":"X"}</h1>
            <div className="grid">
                {board.map((el,idx)=><Card gameEnd={winner ? true:false} key={idx} onPlay={play} player={el} index={idx} />)}
            </div>
            {
                winner && (
                    <>
                        <h1 className="turn-highlight">Winner is {winner}</h1>
                        <button className="reset" onClick={reset}>reset</button>
                    </>
                )
            }

            {
                !winner && count>=numberOfBox && (
                    <>
                        <h1 className="turn-highlight">This is a draw</h1>
                        <button className="reset" onClick={reset}>reset</button>
                    </>
                )
            }
        </div>
    )
}

export default Grid