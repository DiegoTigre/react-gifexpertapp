
import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

  const [InputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
      setInputValue(e.target.value);

  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    if (InputValue.trim().length > 2 ){

        // console.log('submit hecho');
        setCategories( cats => [InputValue,...cats ]);
        setInputValue('');


    }
    
   

    
  }


    return (
        <form onSubmit = {handleSubmit}>
        
        <input 
        
        type="text"
        value={ InputValue }
        onChange={handleInputChange}
        
        />
            
            </form>
    )
}

AddCategory.prototype = {

  setCategories: PropTypes.func.isRequired

}
