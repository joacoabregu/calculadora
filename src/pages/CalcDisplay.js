import { connect } from 'react-redux';
import Buttons from './Buttons';
import {setDisplay, resetDisplay, setTotal, setOperator,  reset} from '../state/action'


function CalcDisplay(props) {
    
    function displayNumber(e){
        if(!props.pushOperator){
            props.dispatch(resetDisplay(e.currentTarget.childNodes[0].innerHTML));
        } else {
            props.dispatch(setDisplay(e.currentTarget.childNodes[0].innerHTML));

        }
    } 

    function operators(e){
        let operator = e.currentTarget.childNodes[0].innerHTML;
        props.dispatch(setOperator(operator));                   
    }
    
    function resetAll(){
        props.dispatch(reset());                                              
    }
    function equal(){
        props.dispatch(setTotal())           
    }
    

    return (
        <>
                <div className="row">
                    <Buttons symbol="1" onClickFunction={displayNumber}/>
                    <Buttons symbol="2" onClickFunction={displayNumber}/>
                    <Buttons symbol="3" onClickFunction={displayNumber}/>
                </div>
                <div className="row">
                    <Buttons  symbol="4" onClickFunction={displayNumber}/>
                    <Buttons symbol="5" onClickFunction={displayNumber} />
                    <Buttons symbol="6" onClickFunction={displayNumber} />
                </div>
                <div className="row">
                    <Buttons  symbol="7" onClickFunction={displayNumber} />
                    <Buttons symbol="8" onClickFunction={displayNumber}/>
                    <Buttons symbol="9" onClickFunction={displayNumber} />
                </div>
                <div className="row">
                    <Buttons symbol="0" onClickFunction={displayNumber} />
                    <Buttons symbol="." onClickFunction={displayNumber} />
                    <Buttons symbol="+" onClickFunction={operators} cssClass={"operators"} />
                </div>
                <div className="row">
                    <Buttons  symbol="-" onClickFunction={operators} cssClass={"operators"} />
                    <Buttons symbol="*" onClickFunction={operators} cssClass={"operators"} />
                    <Buttons symbol="/" onClickFunction={operators} cssClass={"operators"} />
                </div>
                <div className="row row-last">
                    <Buttons  symbol="AC" onClickFunction={resetAll} cssClass={"alert"} />
                    <Buttons  symbol="=" onClickFunction={equal} cssClass={"alert"} />                    
                </div>
        </>
    )
}

function mapStateToProps(state) {
    return {
        pushOperator: state.push,
    }
}

export default connect(mapStateToProps)(CalcDisplay);