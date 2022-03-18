import React from 'react';

const SelectField = (props) => {
    return (
        <div>
            <label htmlFor='selectField'>Select field {props.number}</label>
            <select name='selectField' className='field'>
                <option value='one'>One</option>
                <option value='two'>Two</option>
                <option value='three'>Three</option>
            </select>
        </div>);
}

export default SelectField;