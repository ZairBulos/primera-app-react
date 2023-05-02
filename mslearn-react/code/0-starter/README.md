# Introducción a React

React.js es el marco de JavaScript de front-end más conocido. Los desarrolladores usan JSX, una combinación de HTML y JavaScript, para crear vistas de forma natural. Los desarrolladores también pueden crear componentes para bloques que se puede reutilizar en sus aplicaciones. Este módulo presenta React y los principales conocimientos que los desarrolladores necesitan para usar este marco eficaz.

### Objetivos de aprendizaje:

* Aprender a definir JSX.
* Instalar React.
* Crear un proyecto de React.
* Crear un componente de React.
* Trabajar con datos dinámicos.
* Trabajar con CSS.

<hr/>

## Introducción a React

React es un marco de código abierto para crear interfaces de usuario. Es más famoso por crear aplicaciones web. Pero React se puede usar para crear aplicaciones móviles o de escritorio a través de React Native. React se centra en la *Vista* en [Modelo-Vista-Controlador](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller). Por lo tanto, puede usar otras bibliotecas para el enrutamiento, la administración de estados y el acceso a las API.

En este módulo se exploran los conceptos básicos de React. Presenta *XML de JavaScript* (JSX), los componentes y la visualización de los datos.

### Project

En este módulo, vamos a crear un proyecto de inicio para React. Presentaremos JSX y la necesidad de un paquete de instalación web. Vamos a crear los primeros componentes y a presentar la estructura del proyecto.

### Requisitos previos

Asegúrese de tener el siguiente software instalado en el equipo local:

* [Node.js](https://nodejs.org/)
* Un editor de código como [Visual Studio Code](https://code.visualstudio.com/)
* [Git](https://git-scm.com/)

<hr/>

## Introducción a JSX

React usa una sintaxis especial conocida como XML de JavaScript (JSX). JSX le permite integrar HTML (o componentes personalizados que puede crear) y JavaScript en un solo archivo o incluso en una sola línea de código. Mediante JSX, puede basarse en la sintaxis de JavaScript para la lógica. Visual Studio Code proporciona IntelliSense para los archivos JSX, por lo que es una herramienta útil cuando se trabaja con React.

> Nota
> JSX se basa en lenguaje de marcado extensible (XML). La sintaxis de XML es similar a la de HTML. En muchos casos, es posible que no note ninguna diferencia. Sin embargo, XML incluye un par de restricciones importantes en la sintaxis:
> * Todos los elementos deben colocarse dentro de un elemento principal.
> * Todos los elementos deben estar cerrados.

### Proceso de compilación

Los exploradores no admiten JSX de forma nativa. Por tanto, JavaScript y HTML se deben generar a partir de los archivos JSX que va a representar un explorador. Varios paquetes de instalación y otras herramientas pueden realizar las tareas necesarias. Estas herramientas incluyen [Webpack](https://webpack.js.org/), [Parcel](https://parceljs.org/) y [Snowpack](https://www.snowpack.dev/). Usaremos Snowpack porque no requiere código ni scripting adicional.

### Componentes

El desarrollo de React se basa en componentes. Los componentes son unidades independientes de pantalla y trabajo. Se pueden reutilizar en la aplicación. Úselos para dividir lógicamente la aplicación en fragmentos más pequeños (o componentes).

<hr/>

## Creación de un proyecto de inicio

Usaremos un proyecto de inicio para que podamos empezar a escribir código rápidamente. El proyecto de inicio contiene la estructura mínima que necesitamos para empezar a desarrollar una aplicación React con Snowpack:

* Dos archivos
* Dos directorios vacíos

### Clonación del repositorio e instalación de paquetes

1. Abra una ventana de terminal o comandos y ejecute los siguientes comandos:

    ```Bash
    # Windows
    git clone https://github.com/MicrosoftDocs/mslearn-react
    cd mslearn-react/code/0-starter
    ```

2. Instale los paquetes necesarios mediante el comando siguiente en la misma ventana de terminal o comandos:

    ```Bash
    npm install
    ```

3. Abra el directorio en Visual Studio Code mediante la ejecución de este comando:

    ```Bash
    code .
    ```

### Exploración del proyecto de inicio

Vamos a examinar las carpetas y los archivos del proyecto de inicio:

* **package.json** contiene la lista de paquetes y scripts:
    - Paquetes:
        - **React** para React
        - **ReactDOM** para montar la aplicación en el explorador
* Scripts:
    - **start** para ejecutar el servidor de desarrollo desde Snowpack:
        - Compila prácticamente todos los archivos JavaScript y HTML.
        - Hospeda y reinicia automáticamente el servidor a medida que se modifican los archivos.
    - **build** para generar archivos de producción para la implementación
* **snowpack.config.js** contiene la configuración básica de Snowpack.
    - **mount** crea dos directorios virtuales para el servidor Snowpack.
        - **public** contiene todos los archivos estáticos (como HTML, CSS e imágenes). Se hospeda como `/`.
        - **src** contiene todos los archivos JSX y los archivos de React asociados. Se hospeda como `dist`.
* **public** contiene todos los archivos estáticos.
* **src** contiene todos los archivos de React.

<hr/>

## Hello, world!

La manera más común de iniciar cualquier curso de programación es mostrar el texto "Hello, world!". Siguiendo con esta tradición, usaremos React para mostrar el famoso texto.

Crearemos dos elementos para la base de nuestro proyecto:

* El archivo *index.html* hospeda nuestra aplicación React.
* El archivo *index.jsx* monta nuestra aplicación.

### Creación del host de la aplicación

1. En Visual Studio Code, cree un nuevo archivo en la carpeta *public*. Asígnele el nombre *index.html*.
2. Agregue el siguiente código HTML:

    ```HTML
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Recipes</title>
    </head>
    <body>
        <div id="app"></div>
        <script type="module" src="/dist/index.js"></script>
    </body>
    </html>
    ```

#### Exploración del código

Observe dos líneas importantes en nuestro código HTML:

* `<div id="app"></div>`
    - Esta línea crea el elemento HTML que hospeda la aplicación React.
    - Llamamos a este elemento por su identificador para representar la aplicación.
* `<script type="module" src="/dist/index.js"></script>`
    - Esta línea carga el código JavaScript.

> Nota
> El nombre del archivo que se va a importar es *index.js*. No usamos index.jsx, ya que los exploradores no pueden representar archivos JSX. Siempre necesitamos un paquete de instalación (como Snowpack) para generar JavaScript. Hacemos referencia a JavaScript en lugar de a JSX.
> El atributo `type="module"` nos permite usar instrucciones `import` en nuestros archivos JavaScript (o JSX). Esta funcionalidad es relativamente nueva en los exploradores. Nos ayuda a importar los paquetes y componentes necesarios.

### Creación del punto de entrada para la aplicación React

Necesitamos código para representar la aplicación React dentro del código HTML. Tradicionalmente, el archivo index.jsx se usa para representar la aplicación.

1. Cree un nuevo archivo dentro de la carpeta src. Asígnele el nombre index.jsx.
2. Agregue el siguiente código:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('app')
);
```

#### Exploración del código

El archivo *index.jsx* se inicia importando dos bibliotecas importantes. La primera biblioteca, `React`, nos permite usar JSX. Se importará en todos los componentes o archivos JSX que se creen. La segunda biblioteca, `ReactDOM`, representa nuestra aplicación dentro del código HTML.

`render` requiere dos parámetros:

* El código HTML que se desea mostrar. En este caso, el código HTML es un encabezado `h1`.
* El elemento HTML que se desea usar para mostrar el código HTML. Usaremos el elemento que tiene un identificador `app`. Hemos creado este elemento anteriormente.

La capacidad de usar HTML dentro de nuestra codificación de JavaScript es parte de la eficacia de JSX.

### Comprobación de la página

Ahora que hemos creado nuestro código, veamos nuestro sitio en acción.

1. Abra el terminal integrado en Visual Studio Code; para ello, seleccione **Ver>Terminal** o seleccione `Ctrl+`.
2. Use el siguiente comando para iniciar el servidor de desarrollo de Snowpack:

```Bash
npm start
```

El explorador predeterminado debe abrirse de forma automática y mostrar la página. Si la página no aparece automáticamente, abra el explorador y vaya a http://localhost:8080.. Ahora debería ver la página.

![hello](https://learn.microsoft.com/es-es/training/modules/react-get-started/media/hello.png)

#### Exploración del código generado

Nuestro código de JSX se convierte en el código HTML y JavaScript adecuados para su presentación en el explorador. Abra el archivo JavaScript generado por Snowpack: http://localhost:8080/dist/index.js.. Verá el siguiente código:

```JavaScript
import React from "../web_modules/react.js";
import ReactDOM from "../web_modules/react-dom.js";
ReactDOM.render(/* @__PURE__ */ React.createElement("h1", null, "Hello, world!"), document.getElementById("app"));
```

Céntrese en la línea de código que genera el elemento `h1` y coloca el texto dentro de él:

```JavaScript
React.createElement("h1", null, "Hello, world!")
```

El uso de este código es similar al uso de `document.createElement` con JavaScript de vanilla. Las herramientas proporcionadas por Snowpack y otros paquetes de instalación nos permiten usar JSX para generar automáticamente el código adecuado para el explorador.

<hr/>

## Creación del primer componente

El desarrollo de React se basa en *componentes*. Estas unidades independientes están diseñadas para reutilización y modularidad. Los proyectos de React normalmente contienen muchos componentes.

Un componente puede ser una función o una clase. La mayoría de los desarrolladores de React prefieren crear componentes mediante el uso de funciones, por lo que nos centraremos en este estilo.

Normalmente, las aplicaciones tienen un componente principal, normalmente denominado `App`. App actúa como la raíz de la aplicación. Comenzaremos por crear nuestro componente App.

### Creación del componente

1. Abra Visual Studio Code.
2. Cree un nuevo archivo en src. Asígnele el nombre *App.jsx*.
3. Agregue el siguiente código:
    
```JavaScript
import React from 'react';

function App() {
    return (
        <article>
            <h1>Recipe Manager</h1>
        </article>
    )
}

export default App;
 ```

#### Exploración del código

Iniciamos el archivo *App.jsx* importando `React` para que podamos usar la sintaxis JSX. A continuación, creamos una función denominada `App`, como crearíamos cualquier otra función en JavaScript. Por último, exportamos la función mediante la sintaxis estándar de JavaScript. El núcleo de nuestro componente está incluido en la instrucción `return`.

Tenga en cuenta que estamos usando HTML (técnicamente XML) insertado en JavaScript. Esta funcionalidad muestra la eficacia de JSX. Podemos usar la lógica y la eficacia de JavaScript para crear unidades de trabajo independientes (componentes).

El código HTML devuelto por la función (o componente) se muestra en la página.

> Nota
> El elemento `h1` se anida dentro de un elemento `article` de HTML 5. Dado que JSX usa XML, es necesario tener un elemento raíz. El elemento `article` es la raíz para este componente. Esta estructura nos permite agregar HTML y otros componentes de React a medida que la aplicación crece.

### Actualización de la aplicación para usar el componente principal

Vamos a actualizar nuestra aplicación para usar nuestro nuevo componente.

1. Abra *index.jsx*.

2. Después de la línea que pone `import ReactDOM from 'react-dom'`; (debe ser la línea 3), agregue el código siguiente:

```JavaScript
import App from './App';
```

3. Busque el código que pone` <h1>Hello, world!</h1>`. Reemplace este mensaje inicial por una llamada al componente `App`:

```jsx
<App />
```

#### Exploración del código

Este es el contenido completo de *index.jsx* ahora:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

Nuestra instrucción `import` importa nuestro componente mediante la misma sintaxis que usaríamos para cualquier otro módulo. Ahora podemos usar el componente como si fuera HTML.

> Nota
> Dado que JSX usa la sintaxis de XML, debemos cerrar la etiqueta `App`. Para ello, se puede usar la sintaxis de formato largo `<App></App>` o la abreviatura de "autocierre" `<App />`. Ambas opciones funcionan igual, pero la mayoría de los desarrolladores usan la opción abreviada.

### Ver los resultados

Guarde todos los archivos. El explorador se actualiza automáticamente con los resultados.

![recipe-manager](https://learn.microsoft.com/es-es/training/modules/react-get-started/media/recipe-manager.png)

<hr/>

## Visualización de datos dinámicos

Los componentes permiten dividir una aplicación en partes lógicas. En esta unidad, exploraremos esta funcionalidad creando un componente para el título de una receta. Vamos a crear componentes e importarlos en `App`. También exploraremos cómo mostrar los datos de forma dinámica.

### Visualización de datos dinámicos

Para mostrar los datos dinámicos dentro de un componente, use la sintaxis `{ }`, que a veces se denomina *handlebars*. Este estilo de sintaxis es relativamente común en las herramientas de plantillas HTML. Use estos handlebars para cambiar eficazmente al modo JavaScript y ejecutar casi cualquier código JavaScript válido.

Por ejemplo, para mostrar la hora actual, podría usar el código siguiente:

```JavaScript
<div>{ Date.now() }</div>
```

### Creación de un componente RecipeTitle

En nuestro ejemplo, crearemos un componente para el título de una receta. Usaremos una variable de JavaScript para que el título muestre cómo React puede mostrar los datos dinámicos. Las unidades futuras le mostrarán cómo trabajar con datos más complejos.

1. Cree un nuevo archivo en de la carpeta src. Asígnele el nombre *RecipeTitle.jsx*.
2. Agregue el código siguiente a *RecipeTitle.jsx*:

 ```jsx
import React from 'react';

function RecipeTitle() {
    const title = 'Mashed potatoes';
        
    return (
        <h2>{ title }</h2>
    )
};

export default RecipeTitle;
```

#### Exploración del código

Observe que se crea una constante denominada `title`. Después, usamos la sintaxis de handlebar `{ }` para indicar a React que queremos mostrar el valor de `title` dentro del elemento `<h2>`.

### Uso del componente RecipeTitle

Vamos a mostrar `RecipeTitle` en nuestra aplicación agregándola a `App`.

1. Abra *src/App.jsx*.

2. Debajo de la línea que pone `import React from 'react'`; (debe ser la línea 2), agregue el código siguiente:

```JavaScript
import RecipeTitle from './RecipeTitle'
```
    
3. Use RecipeTitle como elemento HTML agregando el siguiente código debajo de la sintaxis que pone <h1>Recipe Manager</h1>:
    
```jsx
<RecipeTitle />
```

#### Exploración del código

Este es ahora todo el contenido del archivo *src/App.jsx*:

```jsx
import React from 'react';
import RecipeTitle from './RecipeTitle'

function App() {
    return (
        <article>
            <h1>Recipe Manager</h1>
            <RecipeTitle />
        </article>
    )
}

export default App;
```

De la misma manera que hemos usado `<App />` como un elemento HTML, podemos usar `RecipeTitle`. En este ejemplo se muestra la esencia de la creación de aplicaciones React: se crean y usan componentes para compilar la aplicación.

### Ver los resultados

Guarde todos los archivos. El explorador se debe actualizar automáticamente y mostrar la página actualizada. El encabezado **Mashed potatoes** se muestra en la parte superior de la página.

![title](https://learn.microsoft.com/es-es/training/modules/react-get-started/media/title.png)

<hr/>

## Incorporación de estilo

Cuando se usa React, se está creando HTML. El método de creación es diferente, pero el explorador todavía representa HTML, CSS y JavaScript.

Incluso podemos agregar CSS a nuestros componentes para aplicarles estilo. Para agregar CSS a un componente, hacemos referencia a él de la misma manera que importamos cualquier otra dependencia de JavaScript.

### Incorporación de CSS

1. Agregue un nuevo archivo a la carpeta *src*. Asígnele el nombre *index.css.*
2. Agregue el siguiente estilo al archivo:

```css
article {
    margin-left: 10%;
    margin-right: 10%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 18px;
}
```

### Importación de CSS

1. Abra el archivo *App.jsx.*

2. Agregue la siguiente línea de código al comienzo del archivo:

```JavaScript
import './index.css'
```

3. Regrese al explorador y actualícelo. El sitio se actualiza con el nuevo estilo.

<hr/>

## Creación de un proyecto React desde cero

En este módulo, hemos usado un proyecto de inicio para ponernos en marcha rápidamente. Este programa de instalación nos permitió centrarnos en React y en parte de la nueva sintaxis. Puede usar el proyecto de inicio para su propio trabajo.

Puede que desee intentar crear un proyecto desde cero. Para iniciar desde una carpeta vacía, siga los pasos de esta unidad. En los pasos se usa Snowpack, al igual que en el proyecto de inicio.

Esta unidad es opcional. Si no necesita crear su propio proyecto, continúe con la unidad siguiente.

### Descripción de la estructura del proyecto

Nuestra configuración principal tiene dos carpetas principales que almacenan código:

* **public**
    - Contiene HTML, CSS, imágenes u otros archivos estáticos
    - Almacena los archivos *index.html* e *index.css*
* **src**
    - Contiene los archivos que deben representarse
    - Almacena todos los archivos .jsx

También crearemos dos archivos para configurar nuestra aplicación:

* **package.json**: contiene la lista de paquetes y scripts para nuestra aplicación
* **snowpack.config.js**: contiene opciones de configuración para Snowpack

Necesitamos tres paquetes principales para nuestra aplicación:

* **Snowpack**: se usa para representar JSX en HTML y JavaScript
* **React**: se usa para crear nuestros componentes
* **React-DOM**: se usa para montar la aplicación

### Creación de la estructura inicial

En un directorio vacío, empiece por instalar los componentes necesarios mediante npm. A continuación, configure Snowpack y agregue los scripts al archivo *package.json*.

1. Abra una ventana de terminal o comandos. Después, ejecute los siguientes comandos para crear el directorio y el archivo *package.json* para npm.

```Bash
# Windows
md react-recipes && cd react-recipes
md src
md public
touch package.json
echo "{}" > package.json
```

2. Ejecute el código siguiente en la misma ventana de terminal o comandos.

```Bash
npm install --save-dev snowpack
npm install react react-dom
```

> Nota
> Snowpack es una *dependencia de desarrollo*. Es decir, no se necesita para la producción, ya que genera los archivos JavaScript y HTML necesarios durante el proceso de compilación.

3. Abra el directorio en Visual Studio Code mediante la ejecución de este comando.

```Bash
code .
```

### Configuración de Snowpack

Una de las ventajas de una herramienta como Snowpack es que se configura automáticamente en su mayor parte. Sin embargo, es necesario indicar la estructura de carpetas del código. Para indicar la estructura de carpetas, se establecen opciones en el archivo *snowpack.config.js*.

1. En Visual Studio Code, cree un archivo nuevo; para ello, seleccione **Archivo>Nuevo archivo**.
2. Asigne al archivo el nombre *snowpack.config.js*.
3. En el nuevo archivo, asigne el siguiente código.

```JavaScript
module.exports = {
    mount: {
        'public': '/',
        'src': '/dist'
    }
}
```

Este código indica a Snowpack que use nuestra carpeta *public* como la raíz de la aplicación. También establece el directorio *src* como ubicación virtual para los archivos JavaScript y HTML que generará.

### Creación de los scripts de npm

Para admitir nuestro trabajo de desarrollo, usaremos dos scripts con Snowpack. El primer script inicia el servidor de desarrollo. Esta acción actualiza automáticamente nuestra página cuando modificamos nuestra aplicación. El segundo script se usa cuando estamos preparados para compilar todos nuestros archivos para la implementación.

1. En Visual Studio Code, abra el archivo *package.json*.

2. En la parte inferior del archivo, encima de la última llave (`}`), agregue el código siguiente. Este código crea los scripts de inicio y compilación.

```JSON
{
    "scripts": {
        "start": "snowpack dev",
        "build": "snowpack build"
    }
}
```

Ahora, todo el archivo debería tener un aspecto similar al siguiente código.

```JSON
{
  "devDependencies": {
    "snowpack": "^2.18.5"
  },
  "dependencies": {
    "react": "^17.0.1",
    "react-dom": "^17.0.1"
  },
  "scripts": {
      "start": "snowpack dev",
      "build": "snowpack build"
  }
}
```

3. Guarde todos los archivos; para ello, seleccione Archivo>Guardar todo.

Ahora, ya ha configurado el proyecto de inicio. Puede agregar los archivos *index.html*, *App.jsx*, entre otros, tal como hizo en las unidades anteriores.