function Buttons(props) {
    
    return(
        <div className="button" onClick={props.displayNumber}>
            <p>{props.symbol}</p>
        </div>
    )
}

export default Buttons;