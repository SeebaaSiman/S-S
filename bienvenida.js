export function mostrarBienvenida() {
 console.log(`
=================================================================
 Bienvenido a la API de productos FakeStore
=================================================================
Comandos disponibles:

HELP                        -> Muestra este listado de comandos
GET products                -> Lista todos los productos
GET products <id>           -> Muestra el producto con ese id
POST products <title> <price> <category> -> Crea un producto
DELETE products <id>        -> Elimina el producto con ese id
SEARCH products <title>     -> Busca productos que coincidan con el título

Ejemplo:
npm run start GET products
npm run start GET products 1
npm run start POST products "Camisa" 19.99 "ropa"
npm run start DELETE products 1
npm run start SEARCH products "camisa"
npm run start HELP
=================================================================
`);
}