import { GameHistoryElement } from "./GameHistoryElement"

export function GameHistory(props) {

    const history = props.history;
    const changeStep = props.changeStep;

    const styleGameHistory = {
        display: "flex",
        flexDirection: "column"
    }
    
    const moves = [];
    for(let index = 0; index < history.length; index++) {
        if(index > 0) {
            moves.push(<GameHistoryElement changeStep={() => changeStep(index)} index={index} title={`Шаг #${index}`} />);
        }
        else {
            moves.push(<GameHistoryElement changeStep={() => changeStep(index)} index={index} title={`Начало игры`} />);
        }
    }

    return (
        <div style={styleGameHistory}>

            <p>История:</p>
            
            {moves}

        </div>
    )

}