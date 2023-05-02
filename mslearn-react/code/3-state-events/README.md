# Estado y eventos de React

Normalmente, las aplicaciones implican datos que cambiarán según las interacciones del usuario. Estos cambios suelen administrarse mediante algún tipo de estado y eventos. En este módulo, exploraremos los conceptos de estado y eventos. También veremos las herramientas que React proporciona para la administración.

### Objetivos de aprendizaje:

* Agregar estado a una aplicación
* Agregar controladores de eventos
* Usar el enlace Effect para responder a los cambios de estado

<hr/>

## Introducción

Para crear una aplicación interactiva, debe ser capaz de modificar los datos y responder a las solicitudes de los usuarios. En React, esta función se administra mediante el estado y los eventos.

El *estado* son los datos que se pueden actualizar y compartir entre los componentes de la aplicación. Los *eventos* permiten controlar todas las formas en las que un usuario puede interactuar con la aplicación: los clics, la escritura y las pulsaciones.

<hr/>

## Exploración de los conceptos de estado

Las propiedades (también conocidas como *props*) y el estado son dos de las partes más importantes de cualquier aplicación de React. En una aplicación típica de React, el usuario interactúa con la página para cambiar elementos. Estos cambios pueden incluir rellenar un formulario o pulsar un elemento. Por lo tanto, es necesario asegurarse de que nuestra aplicación pueda responder a las solicitudes del usuario.

### Propiedades

Las *propiedades* son valores que se pasan a los componentes de React. Estas copias de los datos están diseñadas para permitir que el componente se represente a sí mismo. Las propiedades son valores *inmutables* (de solo lectura).

### State

El *estado* almacena los datos que esperamos cambiar durante el ciclo de vida de la aplicación. Los cambios pueden ser valores actualizados mediante un formulario, elementos de tareas pendientes marcados como completados o datos de servidor actualizados que deben mostrarse en la página. Básicamente, si el valor puede cambiar, debe formar parte del estado de la aplicación.

### Inmutabilidad
 
Uno de los principios básicos de React es el concepto de *inmutabilidad*. La inmutabilidad significa que los valores no se actualizan, sino que se establecen en nuevas copias de los datos.

Al mantener el estado inmutable, React puede determinar mejor lo que ha cambiado, ya que los valores originales siguen existiendo. Este uso continuo de nuevas copias permite almacenar el historial o aplicar otras funciones avanzadas.

<hr/>

## Incorporación de estado a una aplicación

React administra el estado de varias maneras. Nos centraremos en una de las principales formas, los *enlaces de React*.

Un *enlace* es un mecanismo que permite acceder al funcionamiento interno de React. Puede usar enlaces para ejecutar código cuando se produce algún cambio en React. También se usan para registrar algo con React, como un estado. Cuando creamos el estado mediante el enlace `useState`, por ejemplo, obtenemos el objeto de estado y una función de actualizador para actualizar el valor del enlace.

### Escenario

Una técnica común que usan muchos cocineros es la *mise en place*, que significa "preparación" en francés. Los cocineros se aseguran de que todos los elementos están preparados antes de empezar a cocinar.

En nuestra aplicación de recetas, queremos permitir que los usuarios pulsen ingredientes para marcarlos como preparados. Comenzaremos por crear el estado y pasar la información de presentación al componente. En la unidad siguiente, exploraremos cómo controlar eventos.

#### Incorporación de estado

Cualquier tipo de datos u objeto de JavaScript se puede registrar con estado en React. La función que se usa para registrar el objeto es `useState`. La función `useState` especifica el valor inicial. Devuelve el objeto con estado recientemente creado y otra función que se puede usar para actualizar el valor.

> Nota
> En React, el estado es *inmutable*, lo que significa que no se puede cambiar. Para modificar el valor de un objeto con estado, reemplácelo por una nueva instancia que contenga los valores adecuados. La función que devuelve `useState` administra este proceso.

1. En el Explorador de VS Code, expanda la carpeta *src* y abra el archivo *App.jsx*. Observe el objeto `initialRecipe` existente. Usaremos este objeto como valor predeterminado de nuestro elemento `recipe` con estado.

2. Cree el objeto de estado `recipe` y la función `setRecipe` desde `useState`. Para ello, agregue el código siguiente después de la línea que lee, `// TODO: Create recipe state`.

```JavaScript
const [ recipe, setRecipe ] = useState(initialRecipe);
```

En este código, `recipe` es el objeto con estado. La función `setRecipe` se utilizará para reemplazar `recipe` por cualquier versión nueva.

3. Podemos usar `recipe` para pasar las propiedades en los componentes. En el código siguiente, se usará el componente `RecipeTitle` para mostrar el título y los comentarios. Pase los valores `title` y `feedback` en `RecipeTitle` mediante la incorporación del código siguiente después del comentario que lee, `// TODO: Pass recipe metadata to RecipeTitle`.

```jsx
<RecipeTitle title={recipe.title} feedback={recipe.feedback} />
```

4. Abra el archivo *RecipeTitle.jsx*. Observe el componente existente que muestra las propiedades `title` y `feedback`.

#### Prueba de la página

1. Guarde todos los archivos.
2. Regrese al explorador y actualícelo. Ahora debería ver los metadatos de la receta mostrados en la página.

![recipe-metadata](https://learn.microsoft.com/es-es/training/modules/react-states-events/media/recipe-metadata.png)

<hr/>

## Trabajo con eventos de usuario

Los eventos permiten ejecutar código en respuesta a las acciones del usuario en la aplicación. Dado que JSX se basa en JavaScript, XML y HTML, la incorporación de escuchas de eventos resulta relativamente familiar.

Se agregan atributos al código HTML para indicar el nombre del evento que quiere controlar. Por ejemplo, si quiere usar `alert` para mostrar un mensaje cuando se selecciona un botón, puede usar el código siguiente:

```JavaScript
class Demo extends React.Component {
    render() {
        <button onClick={ () => alert('Hello, world!') }>Click me!</button>
    }
}
```

Como podría imaginar, también podemos crear una función para escuchar un evento. Agregamos la función a nuestro componente. Después, se llama con la misma sintaxis que se utiliza para `alert`.

```JavaScript
class Demo extends React.Component {
    displayMessage() {
        alert('Hello, world!');
    }

    render() {
        <button onClick={ () => displayMessage() }>Click me!</button>
    }
}
```

También podemos pasar parámetros al controlador de eventos, según sea necesario.

```JavaScript
class Demo extends React.Component {
    displayMessage(message) {
        alert(message);
    }

    render() {
        <button onClick={ () => displayMessage('Clicked button!') }>Click me!</button>
    }
}
```

<hr/>

## Actualización del estado

Dado que el estado en React es inmutable, para modificar el valor de un objeto con estado, lo reemplazamos por un objeto nuevo. Por lo tanto, se evita una clase completa de errores en los que un objeto puede estar en un estado no válido porque se está editando.

### Copia de objetos

Los tipos primitivos, como los valores booleanos o los números, son objetos basados en valores, en contraposición a objetos de referencia. Por lo tanto, cualquier cambio reemplaza todo el objeto de forma automática.

Las cadenas se comportan de igual modo porque son inmutables. Modificamos una cadena reemplazándola por un valor nuevo.

```JavaScript
let message = 'Hello, ';
message = message + 'world!';
```

Cuando trabajamos con un objeto, es necesario crear una instancia nueva de este para garantizar la inmutabilidad. La sintaxis más común para crear una copia de un objeto es la [sintaxis spread](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax/), también denominado el *operador spread*.

```JavaScript
let message = {
    text: 'Hello, world',
    color: 'red'
}

let messageCopy = { ...message };
```

### Modificación de propiedades individuales

Normalmente, solo necesitamos actualizar un subconjunto de propiedades para un objeto. Crear una copia y modificar cada propiedad resultaría tedioso.

En la sintaxis anterior, observe que creamos un objeto JSON nuevo mediante el uso de llaves (`{ }`). El operador spread se puede usar para crear una versión inicial del objeto nuevo. Nos permite especificar valores actualizados para ciertas propiedades. Por ejemplo, si tenemos un valor nuevo para `color`, pero quiere conservar el texto, podemos usar el código siguiente.

```JavaScript
let message = {
    text: 'Hello, world',
    color: 'red'
}

let messageCopy = {
    ...message,
    color: 'green'
};
```

Aquí, `text` mantiene el valor original. El valor `color` se actualiza a verde.

```JavaScript
// new object
{
    text: 'Hello, world',
    color: 'green'
}
```

<hr/>

## Incorporación de controladores de eventos y actualización del estado

Almacenar el estado en el componente principal de la aplicación (`App`) nos permite leer los valores actuales de todas las propiedades importantes. No necesitamos interactuar con cada componente. También podemos centralizar eventos, asegurándose de que los datos se modifiquen en solo una ubicación.

### Escenario

Queremos permitir que los usuarios de la aplicación pulsen en un elemento de la lista de ingredientes cuando lo completen. En el estado, marcaremos el elemento como `prepared`. Esta configuración se reflejará en la aplicación. Cuando cambian los valores, el componente detecta las actualizaciones y vuelve a evaluarlas según sea necesario.

#### Incorporación del método para eventos de clic

1. Abra el archivo* App.jsx*.

2. Cree una escucha de eventos denominada `ingredientClick`. Agréguela debajo del comentario que lee, `// TODO: Create ingredientClick event listener`.

```JavaScript
function ingredientClick(index) {
    const updatedRecipe = { ... recipe };
    updatedRecipe.ingredients[index].prepared = !updatedRecipe.ingredients[index].prepared;
    setRecipe(updatedRecipe);
}
```

La lógica se inicia mediante la creación de una copia de `recipe` con el uso del operador spread. Después, recuperamos el elemento `ingredient` actualizado mediante el uso del elemento `index`. Invertimos el valor de `prepared`. Por último, reemplazamos el objeto `recipe` en el estado mediante el uso de `setRecipe`.

3. Agregue `IngredientList`, un componente que muestra los ingredientes de una receta. Para ello, agregue el código siguiente después del comentario que lee, `// TODO: Pass ingredients and event listener to IngredientList`.

```jsx
<IngredientList ingredients={recipe.ingredients} onClick={ ingredientClick } />
```

Observe que podemos pasar la función `ingredientClick` tal y como pasaríamos cualquier otra propiedad a un componente.

#### Actualización de IngredientList para usar la escucha de eventos

En React, las propiedades (o *props*) pueden ser de cualquier tipo de JavaScript, incluidas las funciones. Por lo tanto, podemos configurar un controlador de eventos como propiedad. Esta configuración nos permite centralizar el control de eventos.

Vamos a actualizar `IngredientList` para usar la función `ingredientClick` que hemos creado anteriormente:

1. Abra el archivo *IngredientList.jsx.* Observe el componente existente. Usaremos este componente para mostrar cómo se usan los eventos.
2. Debajo del comentario `// TODO: Add onClick event`, agregue el JSX siguiente.

```jsx
onClick={ () => props.onClick(index) }
```

Observe que podemos pasar un parámetro a la función `onClick` de la propiedad.

#### Prueba de la página

1. Guarde todos los archivos.
2. Regrese al explorador y actualice la página. Si selecciona los ingredientes, el estado de tachado debería cambiar. Cambia porque la propiedad `prepared` se está actualizando.

<hr/>

## Enlaces

Los enlaces son un patrón común en marcos en los que los valores cambian o se producen otros eventos. De forma centralizada, insertan su propio código para ejecutarse cuando el estado cambia o en otras fases del ciclo de vida de una aplicación.

### Enlace Effect

En esta unidad, nos centraremos en el enlace *Effect*. Este enlace se genera siempre que se establece el valor de estado. Se genera cuando se establecen el valor inicial y todas las actualizaciones posteriores.

El enlace Effect permite ejecutar código en respuesta a la configuración del valor. El código que ejecuta puede tener efectos secundarios, por lo que se pueden actualizar los valores según sea necesario.

### Cuándo usar el enlace Effect

Puede usar el enlace Effect siempre que necesite centralizar el código para responder a un cambio de estado. Imagine un formulario complejo que incluye muchos valores. Normalmente, se debe deshabilitar el botón **Enviar** hasta que los datos que se tienen que enviar al servidor estén en un estado válido. Supongamos que tiene eventos para valores individuales que se cambian en los datos. Después de que un usuario seleccione un país o una región en la aplicación, se debe recuperar una lista de provincias del servidor.

No querrá que cada escucha de eventos examine el estado para ver si los datos están listos para enviarse al servidor. Esta configuración sería ineficaz. En su lugar, puede usar un enlace Effect. Un enlace Effect puede crear una función que examina los datos. Si los datos están en un estado válido, puede habilitar el botón **Enviar**.

### useEffect

A fin de registrar un cliente de escucha para el enlace Effect, use `useEffect`. `useEffect` acepta una función sin parámetros que se va a ejecutar cuando cambie el estado.

```JavaScript
useEffect(() => {
    // code goes here
});
```

De forma predeterminada, `useEffect` se ejecuta siempre que se cambia el estado en cualquier objeto con estado. Puede proporcionar una dependencia para habilitar el enlace solo para un grupo determinado de objetos.

```JavaScript
useEffect(() => {
    // code goes here
}, [ someStatefulObject ]);
```

<hr/>

## Incorporación de enlaces

Puede usar el enlace Effect para supervisar el estado de la aplicación y ejecutar código en respuesta a las actualizaciones. Registramos la función que queremos ejecutar en respuesta a los cambios mediante el uso de `useEffect`.

### Escenario

Nuestra aplicación permite al usuario pulsar en elementos individuales para marcarlos como preparados. Si aún no se han preparado algunos elementos, queremos mostrar el mensaje **Just keep chopping**. Una vez finalizados todos los elementos, queremos mostrar **Prep work done!**.

Configuraremos este comportamiento agregando un nuevo objeto de estado. Actualizaremos el objeto desde el enlace Effect.

> Importante
> En nuestro ejemplo, modificamos el estado en `useEffect`. De forma predeterminada, `useEffect` se ejecuta siempre que se modifique *cualquier* objeto con estado. Este comportamiento puede crear un bucle sin fin. En este bucle, modificamos el estado y se ejecuta el enlace, que modifica el estado, que a su vez ejecuta el enlace, etc.
> Para evitar el bucle sin fin, podemos usar el parámetro de dependencia en `useEffect` a fin de ver solo un objeto. Haremos esto cuando creemos nuestro código.

#### Incorporación de la propiedad de estado nueva

1. Abra el archivo *App.jsx*.
2. Para agregar la nueva propiedad de estado, inserte el código siguiente debajo de la línea que lee, `// TODO: Add new state property`.

```JavaScript
// TODO: Add new state property
const [ prepared, setPrepared ] = useState(false);
```

#### Incorporación del cliente de escucha del enlace Effect

Para agregar el cliente de escucha del enlace Effect, inserte el código siguiente debajo de la línea que lee, `// TODO: Add the effect hook`.

```JavaScript
// TODO: Add the effect hook
useEffect(() => {
    setPrepared(recipe.ingredients.every(i => i.prepared));
}, [recipe]);
```

El código usa `setPrepared` para actualizar `prepared`. Usa el método [every](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/every/), que devuelve un valor booleano basado en cada elemento que coincida con los criterios especificados. En nuestro caso, vamos a comprobar si todos los elementos están preparados. En caso contrario, el método devuelve false.

El segundo parámetro en `useEffect` está establecido en `[recipe]`. Esta configuración proporciona la dependencia para asegurarse de que nuestro código se ejecuta solo cuando el objeto `recipe` cambia.

#### Incorporación de la pantalla

Ahora, muestre el mensaje al usuario si se ha terminado el trabajo de preparación. Para ello, agregue el código siguiente después de la línea que lee, `// TODO: Add the prep work display`.

```JavaScript
{/* TODO: Add the prep work display */}
{ prepared ? <h2>Prep work done!</h2> : <h2>Just keep chopping.</h2>}
```

Miramos el objeto `prepared`. Si es true, se muestra **Prep work done!**. En caso contrario, se muestra **Just keep chopping**.

#### Prueba de la página

1. Guarde todos los archivos.
2. Vuelva al explorador y actualice la página.
3. Seleccione los ingredientes para marcarlos como todos preparados. (Deben estar todos tachados de la lista). El texto se actualiza en la parte inferior de la página.