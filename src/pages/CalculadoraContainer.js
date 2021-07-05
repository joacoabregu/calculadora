import {useState} from 'react'

import CalcDisplay from './CalcDisplay';
function Container(){
    let [display, setDisplay] = useState("0");
    //let [calculo, setCalculo] = useState("")

    function displayNumber(e){
        
        console.log(e.currentTarget.childNodes[0].innerHTML)
        
        setDisplay(display + e.currentTarget.childNodes[0].innerHTML)
    }

    return (
        <section className="container">
            <div className="wrapper">
                <div id="display">{display} </div>
                <CalcDisplay display={display} displayNumber={displayNumber} />  
            </div>

        </section>
    )
}

export default Container;