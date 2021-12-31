import React from 'react';

const RecipeIngredientEdit = (props) => {
    const {ingredient, handleIngredientChange, handleIngredientDelete}=props
    function handleChange(changes){
        handleIngredientChange(ingredient.id, {...ingredient, ...changes})
    }
    return (
        <>
            <input type="text" onInput={e=>handleChange({name:e.target.value})} value={ingredient.name} className="recipe-edit__input"/>
            <input type="text" onInput={e=>handleChange({amount:e.target.value})} value={ingredient.amount} className="recipe-edit__input" />
            <button onClick={()=>handleIngredientDelete(ingredient.id)} className="btn btn--danger">&times;</button>
        </>
    );
}

export default RecipeIngredientEdit;
