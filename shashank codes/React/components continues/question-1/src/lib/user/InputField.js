import React from "react";

const InputField = (props) => {
    return(
        <div>
            <label htmlFor='inputField'>Text field {props.number}</label>
            <input type='text' className="field" name="inputField"></input>
        </div>
    );
}

export default InputField;