function Buttons(props) {
    
    return(
        <div className="button" onClick={props.onClickFunction} >
            <p >{props.symbol}</p>
        </div>
    )
}

export default Buttons;