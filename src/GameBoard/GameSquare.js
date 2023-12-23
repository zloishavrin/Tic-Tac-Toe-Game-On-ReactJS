export function GameSquare(props) {

    const value = props.value;

    let handleOnClick;

    if(value) {
        handleOnClick = () => console.log('Этот элемент уже занят.');
    }
    else {
        handleOnClick = props.handle;
    }

    const styleGameSquare = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "9vw",
        height: "9vw",
        fontSize: "2vw",
        cursor: "pointer"
    }

    return (
        <button onClick={handleOnClick} style={styleGameSquare} className="GameSquare">{value}</button>
    )

}