import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategorty= ({setNombres}) =>{

    const [inputValue, setinputValue] = useState("");

    const handleChange = (e) => {
        setinputValue(
            e.target.value
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 2)
        {
            setNombres( nombs => [inputValue,...nombs])
            setinputValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                onChange={handleChange}
                value={inputValue}
            />
            {/* <button onClick={(e)=>setNombres( nombs => [...nombs, inputValue])}>Agregar!</button> */}
        </form>
    )

}

AddCategorty.propTypes={
    setNombres: PropTypes.func.isRequired
}