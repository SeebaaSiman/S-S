import { mostrarBienvenida } from "./bienvenida.js";
import { mostrarAyuda } from "./help.js";
import { createProduct, deleteProduct, getAllProducts, getProductById, searchProductsByTitle } from "./fxFakestoreApi.js";

const args = process.argv.slice(2);

if (args.length === 0) {
  mostrarBienvenida();
} else {
  const method = args[0]?.toUpperCase(); // GET, POST, DELETE, HELP
  const resource = args[1]; // products
  const param1 = args[2]; // id o title

  async function main() {
    switch (method) {
      case "HELP":
        mostrarAyuda();
        break;
      case "GET":
        if (resource === "products") {
          if (!param1) {
            getAllProducts();
          } else {
            getProductById(param1);
          }
        }
        break;
      case "POST":
        if (resource === "products") {
          const [title, price, category] = args.slice(2);
          if (!title || !price || !category) {
            console.log("Faltan datos para crear el producto. Usa 'HELP' para ver el formato.");
          } else {
            createProduct(title, price, category);
          }
        }
        break;
      case "DELETE":
        if (resource === "products" && param1) {
          deleteProduct(param1);
        } else {
          console.log("Faltan datos para eliminar el producto. Usa 'HELP' para ver el formato.");
        }
        break;

      case "SEARCH":
        if (resource === "products") {
          const title = args[2];
          if (!title) {
            console.log("Falta el título para buscar productos. Usa 'HELP' para ver el formato.");
          } else {
            await searchProductsByTitle(title);
          }
        }
        break;
      default:
        console.log("Método o recurso no soportado. Usa 'HELP' para ver los comandos disponibles.");
    }
  }
  main();
}