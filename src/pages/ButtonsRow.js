import Buttons from './Buttons';

function buttonsRow(props){   
    return(
        <div className="row">
            {props.buttons.map((btn) => {
                return <Buttons symbol={btn.symbol} onClickFunction={btn.clickFunction} cssClass={btn.cssClass} />
            })}
        </div>
    ) 
}

export default buttonsRow;