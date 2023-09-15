# Proyecto Integrador React - Programación III

**Fecha de entrega: 19 de septiembre.**

## Condiciones generales

- El proyecto integrador es grupal y se realiza en grupos de 2 o 3 personas. Los alumnos pueden elegir sus compañeros de trabajo libremente.
- La fecha de entrega del proyecto integrador será el 19 de septiembre.
- Las presentaciones se harán en forma presencial por turnos en Digital House. Cada equipo dispondrá de un tiempo máximo para presentar y defender su proyecto. Pueden agregar recursos como PPTs para sus exposiciones si no extienden el tiempo asignado para exponer.
- Cada integrante debe poder explicar las funcionalidades incluidas en una o varias secciones de la aplicación y explicar técnicamente en detalle una sección del código que haya desarrollado. La exposición debe respaldarse con conceptos teóricos. La aprobación de la presentación individual es condición excluyente para la aprobación del proyecto.
- La nota de la presentación oral es individual, mientras que la del trabajo en sí es grupal.
- La entrega se realizará mediante un repositorio del proyecto en GitHub.
- Utilizar GIT durante todo el proyecto, no solo para la entrega, ya que se tendrá en cuenta el commit log tanto para la nota del trabajo como para la nota de concepto.

## Consignas

El proyecto consiste en realizar una aplicación en REACT que obtendrá información de una API y sumará funcionalidades. Deben respetarse las siguientes condiciones:

### Estructura de archivos

- La estructura de archivos debe respetar el formato y orden vistos en clase.

### Diseño y Estética

- La estética del sitio debe mantenerse consistente en todos los componentes creados y ser responsive (debe verse bien en dispositivos desktop y celulares).
- El footer debe ser actualizado con la información correspondiente de cada grupo.

### Uso de Contenido

- El proyecto debe realizarse con las estructuras de contenido vistas durante el curso.

### Punto 1 - API

- La información se obtendrá de las APIs de TMDB o **Deezer**. Cada grupo elige una de las dos APIs.
    **DEEZER API**
        Para trabajar con la API deberán crear una cuenta en  https://developers.deezer.com/ 

        La documentación de los endpoints se encuentra en:  https://developers.deezer.com/api
        Para poder utilizar la API sin problemas deben agregar este proxy (https://thingproxy.freeboard.io/fetch/) previo a la url del endpoint. Por ejemplo para traer 10 top tracks:
        https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10   
        En caso de que el proxy presente problemas, por favor, informarlo a la cátedra.
        
- Deben seguir las instrucciones para obtener la API Key en TMDB o registrarse en Deezer.
- Se proporciona la documentación de los endpoints a utilizar.

### Punto 2 - Header y Footer

- La aplicación tendrá un header y un footer común a todas las páginas.
- El header debe incluir un logo o nombre y una barra de navegación con enlaces a Home, Favoritos y cada una de las secciones del punto 3.
- El footer debe mostrar los nombres de los integrantes del equipo.

### Punto 3 - Home

- La página de inicio debe mostrar un formulario de búsqueda y 2 listados de elementos generados a partir de endpoints diferentes (por ejemplo, películas más populares y películas en cartel).
- Cada elemento del listado debe incluir una foto, nombre o título, una descripción (inicialmente oculta), un enlace o botón "ver más", un enlace a la página de detalle y un botón "agregar/eliminar de favoritos".

### Punto 4 - Página "Ver todas"

- Esta página muestra todos los contenidos de la sección seleccionada en la página de inicio.
- Debe permitir cargar más información y filtrar el contenido cargado.

### Punto 5 - Detalle de un contenido del listado

- La página de detalle debe obtener información detallada del contenido seleccionado.
- El detalle debe incluir elementos como foto de portada, nombre/título, calificación, fecha de estreno, sinopsis, género, etc., según la API utilizada.
- Debe permitir agregar a favoritos.

### Punto 5 - Favoritos

- Esta página muestra el listado de elementos marcados como favoritos.
- Cada elemento debe permitir navegar a su página de detalle y eliminarlo de la lista de favoritos.

### Punto 6 - Resultados de búsqueda

- Muestra los resultados de búsqueda a partir del endpoint correspondiente.

### Punto 7 - Not Found

- La aplicación debe mostrar una página 404 de "Contenido Inexistente" si se ingresa una URL inexistente.

### Punto 8 - Loader

- Antes de cargar contenidos en cualquiera de las páginas, debe mostrar una animación o mensaje de carga.
