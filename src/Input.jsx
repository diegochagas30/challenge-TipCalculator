import React, { useState } from "react";
import './Input.css'

function Input(props){
    const [inputValue, setInputValue]= useState(0);

    return(
        <div>
            <p>{props.title}</p>
            <input type="number" name={props.input_id} id={props.input_id} value={inputValue} onClick={(number)=> setInputValue(number)}/>
        </div>
    )
}

export default Input