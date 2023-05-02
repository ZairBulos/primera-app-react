import './index.css'
import React from 'react';
import RecipeTitle from './RecipeTitle'
import IngredientList from './IngredientList'
import StepsRecipeList from './StepsRecipeList';

function App() {
    const recipe = {
        title: 'Mashed potatoes',
        feedback: {
            rating: 4.8,
            reviews: 20
        },
        ingredients: [
            { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: true },
            { name: 'Pepper', prepared: true },
        ],
        steps: [
            { name: "Agregue las patatas cortadas a una olla con agua muy salada." },
            { name: "Lleve la olla a ebullición." },
            { name: "Hierva las patatas hasta que estén tiernas, unos 15-20 minutos." },
            { name: "Cuele las patatas." },
            { name: "Vuelva a poner las patatas en la olla." },
            { name:"Agregue mantequilla, nata, sal y pimienta al gusto." },
            { name: "Haga puré las patatas." },
            { name: "Vuelva a sazonar y agregue mantequilla y nata al gusto." },
        ]
    };

    return (
        <article>
            <h1>Recipe Manager</h1>
            
            <RecipeTitle title={ recipe.title } feedback={ recipe.feedback } />

            <IngredientList ingredients={ recipe.ingredients } />

            <StepsRecipeList steps={ recipe.steps } />
        </article>
    )
}

export default App;