export async function getAllProducts() {
 try {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  console.log("Los productos son:");
  data.forEach(producto => console.log(producto));
 } catch (error) {
  console.error("Error al obtener productos:", error.message);
 } finally {
  console.log("Petición finalizada.");
 }
}
export async function getProductById(id) {
 try {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  console.log("Producto encontrado:", data);
 } catch (error) {
  console.error("Error al obtener producto:", error.message);
 } finally {
  console.log("Petición GET finalizada.");
 }
}
export async function createProduct(title, price, category) {
 try {
  const res = await fetch("https://fakestoreapi.com/products", {
   method: "POST",
   body: JSON.stringify({ title, price, category }),
   headers: { "Content-Type": "application/json" }
  });
  const data = await res.json();
  console.log("Producto creado:", data);
 } catch (error) {
  console.error("Error al crear producto:", error.message);
 } finally {
  console.log("Petición POST finalizada.");
 }
}
export async function deleteProduct(id) {
 try {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
   method: "DELETE"
  });
  const data = await res.json();
  console.log("Producto eliminado:", data);
 } catch (error) {
  console.error("Error al eliminar producto:", error.message);
 } finally {
  console.log("Petición DELETE finalizada.");
 }
}

export async function searchProductsByTitle(title) {
 try {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  const resultados = data.filter(producto =>
   producto.title.toLowerCase().includes(title.toLowerCase())
  );
  if (resultados.length > 0) {
   console.log(`Productos encontrados: ${resultados.length}`);
   resultados.forEach(producto => console.log(producto));
  } else {
   console.log("No se encontraron productos con ese título.");
  }
 } catch (error) {
  console.error("Error al buscar productos:", error.message);
 } finally {
  console.log("Búsqueda finalizada.");
 }
}