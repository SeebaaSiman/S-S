Este proyecto es una API básica desarrollada con Node.js como parte de un curso de backend realizado por TalentoTech.

Instructor: Nicolás Riquelme
Tutor: Ana Belen Zambon

## Instalación

```bash
npm install
```

## Uso

Puedes ejecutar el programa con distintos comandos desde la terminal:

### Mostrar bienvenida y ayuda

```bash
npm start
```

### Listar todos los productos

```bash
npm start GET products
```

### Mostrar un producto por ID

```bash
npm start GET products <id>
```

### Crear un producto

```bash
npm start POST products "<title>" <price> "<category>"
```

Ejemplo:

```bash
npm start POST products "Camisa" 19.99 "ropa"
```

### Eliminar un producto por ID

```bash
npm start DELETE products <id>
```

### Mostrar ayuda de comandos

```bash
npm start HELP
```

## Estructura del proyecto

- `index.js`: Archivo principal de la aplicación CLI
- `fxFakestoreApi.js`: Funciones para interactuar con la API FakeStore
- `bienvenida.js`: Mensaje de bienvenida
- `help.js`: Mensaje de ayuda y comandos disponibles

## Autor

Sebastián Siman
