import Buttons from './Buttons';

function buttonsRow(props){   
    return(
        <div className="row">
            {props.buttons.map((btn, index) => {
                return <Buttons symbol={btn.symbol} onClickFunction={btn.clickFunction} cssClass={btn.cssClass} key={index} />
            })}
        </div>
    ) 
}

export default buttonsRow;