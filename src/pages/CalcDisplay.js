import Buttons from './Buttons';

function CalcDisplay(props) {
    
    return (
        <>
                <div className="row">
                    <Buttons symbol="1" displayNumber={props.displayNumber}/>
                    <Buttons symbol="2" displayNumber={props.displayNumber}/>
                    <Buttons symbol="3" displayNumber={props.displayNumber}/>
                </div>
                <div className="row">
                    <Buttons  symbol="4" displayNumber={props.displayNumber}/>
                    <Buttons symbol="5" />
                    <Buttons symbol="6" />
                </div>
                <div className="row">
                    <Buttons  symbol="7" />
                    <Buttons symbol="8" />
                    <Buttons symbol="9" />
                </div>
                <div className="row">
                    <Buttons symbol="0" />
                    <Buttons symbol="," />
                    <Buttons symbol="+" />
                </div>
                <div className="row">
                    <Buttons  symbol="-" />
                    <Buttons symbol="*" />
                    <Buttons symbol="/" />
                </div>
                <div className="row row-last">
                    <Buttons  symbol="=" />
                    
                </div>
        </>
    )
}

export default CalcDisplay;