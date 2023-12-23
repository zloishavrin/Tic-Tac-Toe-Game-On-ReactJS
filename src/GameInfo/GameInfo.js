import { GameHistory } from "./GameHistory";
import { checkWin } from "../utils/checkWin";

export function GameInfo(props) {

    const xIsNextStep = props.xIsNextStep;
    const history = props.history;
    const changeStep = props.changeStep;
    const currentSquares = props.currentSquares;

    const winner = checkWin(currentSquares);
    let status;
    if(winner) status = `Победитель: ${winner}`;
    else status = `Текущий игрок: ${xIsNextStep ? 'X' : 'O'}`;

    const styleGameInfo = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        height: "27vw",
        marginLeft: "2vw",
        fontSize: "1vw"
    }

    return (
        <div style={styleGameInfo}>

            <p>{status}</p>

            <GameHistory changeStep={changeStep} history={history} />

        </div>
    )

}