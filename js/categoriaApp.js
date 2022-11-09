const getProductos = async () => {
    const resultado = await fetch('http://localhost:3000/productos/');
    const resultados = await resultado.json();
    const resultadoo = resultados.filter(producto => producto.publicado == true )
    return resultadoo;
}

const getCategoriaActual = async () =>{
    const productos = await getProductos()
    const categoria = localStorage.getItem("categoria")
    console.log(categoria);
    if(categoria == 1){
        productosFinal = productos.filter(producto => producto.categoria == "PC" )
    } else if (categoria == 2){
        productosFinal = productos.filter(producto => producto.categoria == "Notebook" )
    } else if (categoria == 3){
        productosFinal = productos.filter(producto => producto.categoria == "Consola" )
    } else if (categoria == 4){
        productosFinal = productos.filter(producto => producto.categoria == "Procesador" && producto.marca == "Intel")
    } else if (categoria == 5){
        productosFinal = productos.filter(producto => producto.categoria == "Procesador" && producto.marca == "AMD")
    } else if (categoria == 6){
        productosFinal = productos.filter(producto => producto.categoria == "Refrigeración" )
    } else if (categoria == 7){
        productosFinal = productos.filter(producto => producto.categoria == "Motherboard" )
    } else if (categoria == 8){
        productosFinal = productos.filter(producto => producto.categoria == "RAM" )
    } else if (categoria == 9){
        productosFinal = productos.filter(producto => producto.categoria == "Almacenamiento" )
    } else if (categoria == 10){
        productosFinal = productos.filter(producto => producto.categoria == "GPU" && producto.fabricante == "NVIDIA")
    } else if (categoria == 11){
        productosFinal = productos.filter(producto => producto.categoria == "GPU" && producto.fabricante == "AMD")
    } else if (categoria == 12){
        productosFinal = productos.filter(producto => producto.categoria == "Gabinete")
    } else if (categoria == 13){
        productosFinal = productos.filter(producto => producto.categoria == "Fuente")
    } else if (categoria == 14){
        productosFinal = productos.filter(producto => producto.categoria == "Pantalla" )
    } else if (categoria == 15){
        productosFinal = productos.filter(producto => producto.categoria == "Teclado" )
    } else if (categoria == 16){
        productosFinal = productos.filter(producto => producto.categoria == "Mouse" )
    } else if (categoria == 17){
        productosFinal = productos.filter(producto => producto.categoria == "Auriculares" )
    } else if (categoria == 18){
        productosFinal = productos.filter(producto => producto.categoria != "Auriculares" && producto.categoria != "PC" && producto.categoria != "Notebook" && producto.categoria != "Consola" && producto.categoria != "Procesador" && producto.categoria != "Refrigeración" && producto.categoria != "Motherboard" && producto.categoria != "RAM" && producto.categoria != "Almacenamiento" && producto.categoria != "GPU" && producto.categoria != "Gabinete" && producto.categoria != "Fuente" && producto.categoria != "Teclado" && producto.categoria != "Mouse" && producto.categoria != "Pantalla" && producto.categoria != "Auriculares")
    }
    console.log(productosFinal);
}

getCategoriaActual()

const setCategoria = async (numeroCat) => {
    localStorage.setItem("categoria", numeroCat)
    window.location.href= "./categoria.html"
}