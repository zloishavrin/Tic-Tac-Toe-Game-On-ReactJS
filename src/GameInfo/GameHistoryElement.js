export function GameHistoryElement(props) {

    const title = props.title;
    const index = props.index;
    const changeStep = props.changeStep;

    const styleGameHistoryElement = {
        display: "flex",
        flexDirection: "row"
    }

    return (
        <div style={styleGameHistoryElement}>

            <p>{index}.</p>

            <button onClick={changeStep}>{title}</button>

        </div>
    )

}