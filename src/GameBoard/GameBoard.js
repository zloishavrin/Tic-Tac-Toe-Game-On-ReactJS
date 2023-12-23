import { GameSquare } from "./GameSquare"

export function GameBoard(props) {

    const squares = props.currentSquares;
    const xIsNextStep = props.xIsNextStep;
    const handleOnGameBoard = props.handle;

    const handleOnGameSquare = index => {
        const nextSquares = squares.slice();

        if(xIsNextStep) nextSquares[index] = 'X';
        else nextSquares[index] = 'O';

        handleOnGameBoard(nextSquares);
    }

    const styleGameBoard = {
        display: "flex",
        flexDirection: "row",
        width: "27vw",
        height: "27vw",
        flexWrap: "wrap"
    }

    return (
        <div style={styleGameBoard} className="GameBoard">

            <GameSquare value={squares[0]} handle={() => handleOnGameSquare(0)} />
            <GameSquare value={squares[1]} handle={() => handleOnGameSquare(1)} />
            <GameSquare value={squares[2]} handle={() => handleOnGameSquare(2)} />
            <GameSquare value={squares[3]} handle={() => handleOnGameSquare(3)} />
            <GameSquare value={squares[4]} handle={() => handleOnGameSquare(4)} />
            <GameSquare value={squares[5]} handle={() => handleOnGameSquare(5)} />
            <GameSquare value={squares[6]} handle={() => handleOnGameSquare(6)} />
            <GameSquare value={squares[7]} handle={() => handleOnGameSquare(7)} />
            <GameSquare value={squares[8]} handle={() => handleOnGameSquare(8)} />

        </div>
    )

}