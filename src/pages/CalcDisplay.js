import Buttons from './Buttons';

function CalcDisplay(props) {
    
    return (
        <>
                <div className="row">
                    <Buttons symbol="1" onClickFunction={props.displayNumber}/>
                    <Buttons symbol="2" onClickFunction={props.displayNumber}/>
                    <Buttons symbol="3" onClickFunction={props.displayNumber}/>
                </div>
                <div className="row">
                    <Buttons  symbol="4" onClickFunction={props.displayNumber}/>
                    <Buttons symbol="5" onClickFunction={props.displayNumber} />
                    <Buttons symbol="6" onClickFunction={props.displayNumber} />
                </div>
                <div className="row">
                    <Buttons  symbol="7" onClickFunction={props.displayNumber} />
                    <Buttons symbol="8" onClickFunction={props.displayNumber}/>
                    <Buttons symbol="9" onClickFunction={props.displayNumber} />
                </div>
                <div className="row">
                    <Buttons symbol="0" onClickFunction={props.displayNumber} />
                    <Buttons symbol="." onClickFunction={props.displayNumber} />
                    <Buttons symbol="+" onClickFunction={props.operators} cssClass={"operators"} />
                </div>
                <div className="row">
                    <Buttons  symbol="-" onClickFunction={props.operators} cssClass={"operators"} />
                    <Buttons symbol="*" onClickFunction={props.operators} cssClass={"operators"} />
                    <Buttons symbol="/" onClickFunction={props.operators} cssClass={"operators"} />
                </div>
                <div className="row row-last">
                    <Buttons  symbol="AC" onClickFunction={props.reset} cssClass={"alert"} />
                    <Buttons  symbol="=" onClickFunction={props.equal} cssClass={"alert"} />                    
                </div>
        </>
    )
}

export default CalcDisplay;