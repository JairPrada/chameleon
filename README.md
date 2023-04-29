# Proyecto Chameleon

Este es un proyecto en React que utiliza la biblioteca de Brain.js para crear una red neuronal que predice el color del texto adecuado (blanco o negro) en función del color de fondo seleccionado en la página. Además, la aplicación permite al usuario seleccionar un color de fondo utilizando un selector de colores.

Puedes ver una versión en línea de esta aplicación en Vercel: https://chameleon-omega.vercel.app/

## Tecnologías y librerías utilizadas

Las principales tecnologías y librerías utilizadas en este proyecto son:

- React: Una biblioteca de JavaScript para crear interfaces de usuario.
- Brain.js: Una biblioteca de JavaScript para redes neuronales.
- Lottie: Una biblioteca de JavaScript para animaciones SVG.
- React-Color: Una biblioteca de React para selección de colores.

## Cómo funciona la aplicación

La aplicación consta de dos componentes principales: el selector de colores y el área de vista previa. El usuario puede seleccionar un color utilizando el selector de colores, y el área de vista previa muestra cómo se verá el color seleccionado como fondo.

La aplicación utiliza useEffect para observar los cambios en el color de fondo y llamar a una función que ejecuta la red neuronal de Brain.js. Esta función predice si el color del texto debe ser blanco o negro en función del color de fondo seleccionado.

## Cómo ejecutar la aplicación

Para ejecutar la aplicación en tu máquina local, sigue estos pasos:

1. Clona este repositorio a tu máquina local.
2. Abre la carpeta del repositorio en tu terminal.
3. Instala las dependencias de la aplicación utilizando `npm install`.
4. Ejecuta la aplicación utilizando `npm start`.
5. Abre un navegador web y visita `http://localhost:3000` para ver la aplicación en acción.
