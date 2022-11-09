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
    window.location.href= "../categoria.html"
}


const getProductosTotal = async () => {
    const resultado = await fetch('http://localhost:3000/productos/');
    const resultados = await resultado.json();
    const resultadoo = resultados.filter(producto => producto.publicado == true )
    return resultadoo;
}

const imprimirNumerosCategorias = async () =>{
    const productosTotales = await getProductosTotal()
    const numero1 = document.getElementById(`numeroCategoria1`)
    const numero2 = document.getElementById(`numeroCategoria2`)
    const numero3 = document.getElementById(`numeroCategoria3`)
    const numero4 = document.getElementById(`numeroCategoria4`)
    const numero5 = document.getElementById(`numeroCategoria5`)
    const numero6 = document.getElementById(`numeroCategoria6`)
    const numero7 = document.getElementById(`numeroCategoria7`)
    const numero8 = document.getElementById(`numeroCategoria8`)
    const numero9 = document.getElementById(`numeroCategoria9`)
    const numero10 = document.getElementById(`numeroCategoria10`)
    const numero11 = document.getElementById(`numeroCategoria11`)
    const numero12 = document.getElementById(`numeroCategoria12`)

    const pcNot = productosTotales.filter(producto => producto.categoria == "PC" || producto.categoria == "Notebook")
    const consolas = productosTotales.filter(producto => producto.categoria == "Consola")
    const procCoolers = productosTotales.filter(producto => producto.categoria == "Procesador" || producto.categoria == "Refrigeración")
    const mother = productosTotales.filter(producto => producto.categoria == "Motherboard")
    const ram = productosTotales.filter(producto => producto.categoria == "RAM")
    const almacenamiento = productosTotales.filter(producto => producto.categoria == "Almacenamiento")
    const gpu = productosTotales.filter(producto => producto.categoria == "GPU")
    const gabFuentes = productosTotales.filter(producto => producto.categoria == "Gabinete" || producto.categoria == "Fuente")
    const tecladoMouse = productosTotales.filter(producto => producto.categoria == "Teclado" || producto.categoria == "Mouse")
    const monitores = productosTotales.filter(producto => producto.categoria == "Pantalla")
    const auriculares = productosTotales.filter(producto => producto.categoria == "Auriculares")
    const otros = productosTotales.filter(producto => producto.categoria != "Auriculares" && producto.categoria != "PC" && producto.categoria != "Notebook" && producto.categoria != "Consola" && producto.categoria != "Procesador" && producto.categoria != "Refrigeración" && producto.categoria != "Motherboard" && producto.categoria != "RAM" && producto.categoria != "Almacenamiento" && producto.categoria != "GPU" && producto.categoria != "Gabinete" && producto.categoria != "Fuente" && producto.categoria != "Teclado" && producto.categoria != "Mouse" && producto.categoria != "Pantalla" && producto.categoria != "Auriculares")

    
    numero1.innerHTML = `(${pcNot.length})`
    numero2.innerHTML = `(${consolas.length})`
    numero3.innerHTML = `(${procCoolers.length})`
    numero4.innerHTML = `(${mother.length})`
    numero5.innerHTML = `(${ram.length})`
    numero6.innerHTML = `(${almacenamiento.length})`
    numero7.innerHTML = `(${gpu.length})`
    numero8.innerHTML = `(${gabFuentes.length})`
    numero9.innerHTML = `(${monitores.length})`
    numero10.innerHTML = `(${tecladoMouse.length})`
    numero11.innerHTML = `(${auriculares.length})`
    numero12.innerHTML = `(${otros.length})`
}

imprimirNumerosCategorias()