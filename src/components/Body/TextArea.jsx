import React, { useState } from "react";
import "./body.css"
function TextArea(props) {

    const [inputText, setInputText] = useState()
    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }
    return (
        <>
            <div className="form">
                <input type='text'
                    autoComplete="off"
                    placeholder="Enter item"
                    onChange={handleChange}
                    value={inputText} />
                <button onClick={() => {
                    props.onAdd(inputText);
                    setInputText("")
                }}>+</button>

            </div>
        </>
    )
}
export default TextArea;