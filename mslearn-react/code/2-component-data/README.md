# Trabajo con datos y propiedades en componentes de React

El objetivo de los componentes de React es crear bloques de código e interfaz de usuario reutilizables. Para admitir la reutilización, puede pasar datos a los componentes mediante el uso de propiedades. Veremos cómo agregar propiedades a un componente y cómo trabajar con tipos de datos complejos como, por ejemplo, matrices.

### Objetivos de aprendizaje:

* Mostrar datos dinámicos.
* Mostrar listas de datos.
* Agregar propiedades (props) a los componentes.
* Usar objetos y tipos de datos complejos.

<hr/>

## Introducción

Los componentes son unidades independientes y reutilizables, y constituyen el núcleo de cualquier aplicación React. Los componentes pueden tener sus propias propiedades (o *props*), que permiten pasar datos a un componente, lo que hace que se pueda volver a usar en diferentes escenarios. También puede utilizar datos complejos más allá de las cadenas y los tipos primitivos, lo que brinda a los componentes aún más eficacia.

<hr/>

## Introducción a props

Los componentes de React están diseñados para ser unidades reutilizables. Para habilitar la reutilización, los componentes permiten que se les pasen datos a través de las propiedades o `props`.

`props` son valores de solo lectura disponibles para una única instancia de un componente. Se pueden establecer mediante programación o con la misma sintaxis que se usa al establecer los atributos de los elementos HTML. A diferencia del HTML normal, `props` no se limita a cadenas o valores primitivos; pueden ser objetos complejos o matrices. `props` está disponible como propiedad de `this` dentro de un componente. `props` puede contener tantas propiedades como su componente necesite, y es capaz de almacenar objetos o cualquier otro tipo de datos.

### Escenario

Para que los componentes sean reutilizables, se suelen pasar los datos que se van a mostrar como props. Aquí, creará un componente denominado `RecipeTitle` para mostrar el título de la receta, que se pasará como una propiedad.

#### Creación del componente

1. Abra la carpeta de inicio en Visual Studio Code, como se resalta en la información general.
2. Dentro de Visual Studio Code, abra *src/RecipeTitle.jsx.*
3. Agregue el código siguiente bajo la línea `// TODO: Create RecipeTitle component`:

```JavaScript
// TODO: Create RecipeTitle component
function RecipeTitle(props) {
    return (
        <section>
            <h2>{ props.title }</h2>
        </section>
    )
};

export default RecipeTitle;
```

##### Exploración del código

`RecipeTitle` tiene un aspecto similar al de un componente básico de React, con dos actualizaciones clave.

En primer lugar, acepta un parámetro denominado `props`. Esto contendrá automáticamente todos los atributos o propiedades que se pasen al componente cuando se utilice.

En segundo lugar, puede usar los valores contenidos en `props` como haría con cualquier parámetro normal. Está buscando un valor denominado `title`, que se muestra dentro de un elemento `h2`.

#### Uso del componente

Ahora vamos a actualizar App.jsx para usar el nuevo componente `RecipeTitle` con la propiedad `title`.

1. Abra *App.jsx*.

2. Agregue el código siguiente bajo la línea `// TODO: Add import for RecipeTitle` para importar el componente `RecipeTitle` recién creado:

```JavaScript
// TODO: Add import for RecipeTitle
import RecipeTitle from './RecipeTitle'
```

3. Agregue el siguiente código debajo de la línea que lee `// TODO: Add recipe object` para crear un objeto para nuestra receta:

```JavaScript
// TODO: Add recipe object
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
};
```

4. Agregue el código siguiente bajo la línea que lee `// TODO: Add RecipeTitle component`:

```jsx
{/* TODO: Add RecipeTitle component */}
<RecipeTitle title={ recipe.title } />
```

##### Exploración del código

Empiece por crear un objeto para representar la receta que desea mostrar y agréguele una propiedad `title`. A continuación, use el componente `RecipeTitle` del mismo modo que usaría un elemento HTML o cualquier otro componente de React. La diferencia clave es que se establece el atributo `title` para que sea el valor de `recipe.title`. Mediante el uso de handlebars (`{ }`), puede leer dinámicamente el valor.

#### Visualización de la página

1. Guarde todos los archivos.
2. Vuelva al explorador y actualice la página. Ahora debería ver el título Mashed Potatoes en la página.

<hr/>

## Trabajo con lógica en archivos JSX

JSX es una combinación de HTML y JavaScript. Si desea una lógica, por ejemplo para determinar cómo o si se debe mostrar algo, utilice JavaScript. Puede utilizar instrucciones `if...else` o instrucciones `case`, o cualquier otra lógica booleana.

### Operador ternario

Una de las formas más populares de insertar lógica booleana en una aplicación es el [operador ternario](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Conditional_Operator/). El operador ternario es una forma abreviada de crear una instrucción `if...else` en una sola línea de código. Hay tres componentes de la sintaxis ternaria: la expresión booleana, el valor devuelto si la expresión es verdadera y el valor devuelto si la expresión es falsa.

Por ejemplo, si desea mostrar un mensaje si un número es par o impar, puede escribir lo siguiente:

```JavaScript
const number = 3;
console.log(number % 2 ? 'The number is odd' : 'The number is even');
```

La expresión se inicia con el valor booleano (`number % 2`). Si el número es impar, el valor booleano (el resto) es 1 o true; se devolverá el primer valor (`The number is odd`). Si el número es par, el resto es 0, por lo que el valor booleano es false; se devolverá el segundo valor (`The number is even`). El código anterior da como resultado el mensaje `The number is odd`.

### Ternario y JSX

Puede aprovechar esta sintaxis para determinar cómo se deben mostrar los valores. Si desea establecer dinámicamente el parámetro class de un elemento HTML basándose en un valor, puede utilizar lo siguiente:

```jsx
<div className={ isComplete ? 'done' : 'normal' }>{ value }</div>
```

> Nota
> Es posible que observe que el atributo utilizado es `className` en lugar de `class`. Esto se debe a que la palabra `class` está reservada en JavaScript. Para evitar confundir el entorno de ejecución, use `className` en su lugar.

<hr/>

## Uso de tipos de datos complejos como props

El componente `props` no está limitado a cadenas, sino que puede usar objetos de JavaScript. Puede utilizarlo para crear componentes más sólidos.

### Escenario

Desea actualizar `RecipeTitle` para mostrar los comentarios de la receta. Si el promedio de clasificación es inferior o igual a 3,5, querrá que la clasificación sea roja. Si es mayor que 3,5, querrá que la clasificación sea verde. Use el operador ternario y las clases CSS para ayudar a administrar la visualización.

#### Creación de CSS

Al importar CSS en un componente individual, puede evitar conflictos de nombres y otros problemas que suelen surgir con CSS. Aquí, empiece por crear un archivo.css para `RecipeTitle`.

1. Agregue un nuevo archivo a la carpeta src denominada *RecipeTitle.css*.
2. Agregue el siguiente CSS a *src/RecipeTitle.css*:

```css
.red {
    color: red;
}
.green {
    color: green;
}
```

#### Actualización de RecipeTitle

Ahora, actualice `RecipeTitle` para importar el CSS y mostrar los valores.

1. Abra *src/RecipeTitle.jsx*.

2. En la parte superior del archivo, agregue la siguiente línea de código:

```JavaScript
import './RecipeTitle.css';
```

3. Bajo la línea en la que pone `<h2>{ props.title }</h2>`, agregue el código siguiente:

```jsx
<h3 className={ props.feedback.rating <= 3.5 ? 'red' : 'green' }>
    { props.feedback.rating } from { props.feedback.reviews } reviews
</h3>
```

#### Exploración del código

Ha empezado a importar el archivo CSS que creó. Ha agregado un nuevo elemento `h3` para mostrar `feedback`. Ha usado el operador ternario para establecer la clase basada en `rating`.

Todo el contenido de `ReactTitle.jsx` ahora debe ser:

```jsx
import './RecipeTitle.css';
import React from 'react';

// TODO: Create RecipeTitle component
function RecipeTitle(props) {
    return (
        <section>
            <h2>{ props.title }</h2>
            <h3 className={ props.feedback.rating <= 3.5 ? 'red' : 'green' }>
                { props.feedback.rating } from { props.feedback.reviews } reviews
            </h3>
        </section>
    )
};

export default RecipeTitle;
```

#### Actualización del componente de la aplicación para pasar las clasificaciones

Actualice `RecipeTitle` para establecer el atributo `feedback`.

1. Abra *src/App.jsx*.

2. Modifique el elemento `RecipeTitle` existente para agregar el atributo `feedback`:

```jsx
<RecipeTitle title={ recipe.title } feedback={ recipe.feedback } />
```

#### Ver los resultados

Guarde todos los archivos. El explorador debe actualizarse automáticamente con la pantalla actualizada.

![reviews](https://learn.microsoft.com/es-es/training/modules/react-work-with-components-and-data/media/reviews.png)

<hr/>
 
## Uso de la asignación para mostrar los datos dentro de una matriz

A menudo se encontrará trabajando con colecciones de datos almacenados en una matriz. Aunque trabajar con datos de matrices es similar a trabajar con cualquier otro objeto, se necesita la capacidad de recorrer en bucle los datos y mostrarlos al usuario. Como podría sospechar, esto se hace en JSX mediante código de JavaScript. En concreto, se usa la función `map`.

`map` permite crear una copia modificada de una matriz. Esto resulta útil cuando es necesario convertir los valores de una matriz para mostrarlos. Para mostrar los valores a un usuario, toma el valor y lo inserta dentro de un elemento HTML. Este es un trabajo perfecto para `map`. Con `map`, puede crear una nueva matriz que consta de HTML que contiene valores individuales en la matriz para su visualización.

### Use `map`

`map` se comporta de forma similar a un bucle `for...of` o al método `forEach`. Se ejecuta una vez para cada elemento de la matriz. La diferencia clave es que genera una nueva matriz con los valores devueltos por la función que se pasa a map.

Exploremos `map` viendo cómo se puede crear un nueva matriz a partir de otra existente con los números al cuadrado. Empiece por crear una matriz de números.

```JavaScript
const numbers = [2, 5, 8];
```

Luego, utilice `map`. `map` acepta una función con un parámetro único. El parámetro se establecerá en el valor de cada número de la matriz original. Para ello, creará una función anónima utilizando la sintaxis `=>` o de flecha gruesa.

```JavaScript
const squared = numbers.map((number) => {
    return number * number;
});
```

`squared` es una nueva matriz que contiene los números originales al cuadrado. Si los ha mostrado mediante `console.log`, verá lo siguiente:

```JavaScript
console.log(squared);
// Output: [4, 25, 64]
```

### Acceso al índice para generar una clave

Al mostrar listas en React, establezca una clave para cada elemento. Esto permite tanto a React como al usuario hacer referencia a los elementos individuales que se están mostrando actualmente y relacionarlos con los datos enlazados. La forma más común de generar una clave es usar el índice del elemento en la matriz.

Cuando se utiliza un bucle `for`, se genera inherentemente un índice como parte de la sintaxis. Cuando se utiliza `map`, se puede acceder al índice utilizando un segundo parámetro en la función delegada. El segundo parámetro se establece automáticamente en el índice actual.

```JavaScript
const squared = numbers.map((number, index) => {
    console.log(`Processing item ${index + 1}`);
    return number * number;
});
```

### Asignación con React

Como se ha destacado en un ejemplo anterior, se suele utilizar `map` para mostrar una lista de elementos. La diferencia clave es que, en lugar de devolver números (como en el ejemplo), se devuelve JSX. React tiene una directriz que indica que todos los elementos mostrados deben tener una clave. Si los elementos que se muestran no tienen una clave natural, es habitual usar el índice. Por ejemplo, si quiere mostrar los números al cuadrado en elementos `div`, puede utilizar lo siguiente:

```JavaScript
const squared = numbers.map((number, index) => {
    return (
        <div key={index}>{ number * number }</div>
    );
});
```

Puede usar `squared` de la misma manera que otras variables de JSX. Si agregó `{ squared }` a JSX en otro lugar, se representaría la colección de elementos `div` con los números actualizados.

<hr/>

## Visualización de datos de lista

Como React se basa en JSX, que es una combinación de JavaScript y XML/HTML, puede generar HTML de forma dinámica, totalmente integrado con su JavaScript.

### Escenario

Quiere mostrar la lista de ingredientes, incluyendo la adición de una línea de tachado para cualquier elemento marcado como preparado. Para ello, cree un nuevo archivo .css para el estilo y luego un nuevo componente para su lista de ingredientes.

#### Creación del nuevo estilo

1. Cree un nuevo archivo en *src* denominado *IngredientList.css*.
2. Agregue el código siguiente a *IngredientList.css:*

```css
.prepared {
    text-decoration: line-through;
}
```
 
#### Creación del componente

Dado que el código HTML está integrado con JavaScript en JSX, se basa en JavaScript para la lógica y el bucle. Para mostrar un conjunto de elementos contenidos en una matriz, normalmente se usa la función `map`.`map` está diseñado para crear una matriz de elementos basada en el resultado de una llamada de función. Si desea mostrar una lista de títulos en una lista ordenada, use `map` y la sintaxis `{ }` que ha aprendido anteriormente.

1. Dentro de *src*, cree un archivo denominado *IngredientList.jsx*.
2. Agregue el siguiente código al archivo:

```JavaScript
import './IngredientList.css'
import React from 'react';

function IngredientList(props) {
    // Create the list items using map
    const ingredientListItems = props.ingredients.map((ingredient, index) => {
        return (
            // Return the desired HTML for each ingredient
            <li key={index} className={ ingredient.prepared ? 'prepared' : '' }>
                { ingredient.name }
            </li>
        );
    });

    // return the HTML for the component
    // ingredientListItems will be rendered as li elements
    return (
        <ul>
            { ingredientListItems }
        </ul>
    );
}

export default IngredientList;
```

##### Exploración del código

Empiece por crear una matriz de cadenas para que contenga la lista de `ingredients`. Desea que cada ingrediente se muestre como un elemento de lista. Lo implementa mediante map.

Como se ha resaltado anteriormente, `map` se comporta de forma similar a una instrucción `for each`. Ejecuta la función una vez para cada elemento de la matriz. Quiere mostrar una colección de elementos HTML `li`, así que devuelve el JSX apropiado, con `{ingredient}` dentro de `li`.

#### Actualización de la aplicación para usar IngredientList

Vamos a mostrar la lista de ingredientes.

1. Abra *src/app.jsx*.

2. Después de la línea en la que pone `// TODO: Import IngredientList`, agregue el siguiente código:

```JavaScript
// TODO: Import IngredientList
import IngredientList from './IngredientList'
```

3. Después de la línea en la que pone `// TODO: Add IngredientList component`, agregue el siguiente JavaScript:

```JavaScript
{/* TODO: Add IngredientList component */}
<IngredientList ingredients={recipe.ingredients} />
```

#### Mostrar los resultados

Guarda todos los archivos. El explorador actualizará y mostrará automáticamente las nuevas actualizaciones. Observe la lista de ingredientes, donde los dos últimos elementos aparecen como preparados (tachados).

![ingredients](https://learn.microsoft.com/es-es/training/modules/react-work-with-components-and-data/media/ingredients.png)

<hr/>

## Desafío

Ya ha visto cómo crear componentes personalizados y mostrar contenido de forma dinámica. Ponga sus habilidades a prueba agregando un nuevo componente para mostrar los pasos de la receta. Los pasos deben mostrarse como parte de una lista ordenada (`ol`).

Los pasos de la receta son los siguientes:

1. Agregue las patatas cortadas a una olla con agua muy salada.
2. Lleve la olla a ebullición.
3. Hierva las patatas hasta que estén tiernas, unos 15-20 minutos.
4. Cuele las patatas.
5. Vuelva a poner las patatas en la olla.
6. Agregue mantequilla, nata, sal y pimienta al gusto.
7. Haga puré las patatas.
8. Vuelva a sazonar y agregue mantequilla y nata al gusto.