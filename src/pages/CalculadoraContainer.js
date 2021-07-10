import CalcDisplay from './CalcDisplay';
import {connect} from 'react-redux';

function Container(props){  
    
    return (
        <section className="container">
            <div className="wrapper">
                <div id="display">
                    {props.display}                 
                </div>
                <CalcDisplay />  
            </div>
        </section>
    )
}

function mapStateToProps(state) {
    return {
        display: state.display,
    }
}
export default connect(mapStateToProps)( Container);