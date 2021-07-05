import {useEffect, useState} from 'react'

import CalcDisplay from './CalcDisplay';
function Container(){
    let [display, setDisplay] = useState("0")

    function displayNumber(e){
        console.log(e.target.childNodes[0].innerHTML)
        console.log(display)
        setDisplay(e.target.childNodes[0].innerHTML)
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