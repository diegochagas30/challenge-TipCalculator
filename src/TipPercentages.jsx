import React, { useState } from "react";
import './TipPercentages.css'

function TipPercentages(){
    const [percent, setPercent]= useState(0)

    return(
        <div id="tipPercentsContainer">
            <p>Select Tip %</p>
            <div id="percents">
                <button onClick={()=>setPercent(5)}>5%</button>
                <button onClick={()=>setPercent(10)}>10%</button>
                <button onClick={()=>setPercent(15)}>15%</button>
                <button onClick={()=>setPercent(25)}>25%</button>
                <button onClick={()=>setPercent(50)}>50%</button>
                <input type="number" id="costum" placeholder="Costum" onChange={(value)=>setPercent(value)}/>
                
            </div>
        </div>
    )
}

export default TipPercentages