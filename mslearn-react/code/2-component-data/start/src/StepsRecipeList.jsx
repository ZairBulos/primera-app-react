import './IngredientList.css'
import React from 'react';

function StepsRecipeList(props) {
    // Create the list items using map
    const stepsListItems = props.steps.map((step, index) => {
        return (
            // Return the desired HTML for each ingredient
            <li key={index}>
                { step.name }
            </li>
        );
    });

    // return the HTML for the component
    // ingredientListItems will be rendered as li elements
    return (
        <ol>
            { stepsListItems }
        </ol>
    );
}

export default StepsRecipeList;