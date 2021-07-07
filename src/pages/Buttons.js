function Buttons(props) {
    let classes;
    if(props.cssClass){
        classes = `button ${props.cssClass}`;
    }else{
        classes = 'button'
    }
    
    return(
        <div className={classes} onClick={props.onClickFunction} >
            <p >{props.symbol}</p>
        </div>
    )
}

export default Buttons;