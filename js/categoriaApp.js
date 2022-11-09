const getProductos = async () => {
    const resultado = await fetch('http://localhost:3000/productos/');
    const resultados = await resultado.json();
    const resultadoo = resultados.filter(producto => producto.publicado == true )
    return resultadoo;
}

const getCategoriaActual = async () =>{
    const productos = await getProductos()
    const categoria = localStorage.getItem("categoria")
    const titulo = document.getElementById(`tituloCategoria`)
    if(categoria == 1){
        productosFinal = productos.filter(producto => producto.categoria == "PC" )
        titulo.innerHTML = `PC Armadas`
    } else if (categoria == 2){
        productosFinal = productos.filter(producto => producto.categoria == "Notebook" )
        titulo.innerHTML = `Notebook`
    } else if (categoria == 3){
        productosFinal = productos.filter(producto => producto.categoria == "Consola" )
        titulo.innerHTML = `Consolas`
    } else if (categoria == 4){
        productosFinal = productos.filter(producto => producto.categoria == "Procesador" && producto.marca == "Intel")
        titulo.innerHTML = `Procesadores Intel`
    } else if (categoria == 5){
        productosFinal = productos.filter(producto => producto.categoria == "Procesador" && producto.marca == "AMD")
        titulo.innerHTML = `Procesadores AMD`
    } else if (categoria == 6){
        productosFinal = productos.filter(producto => producto.categoria == "Refrigeración" )
        titulo.innerHTML = `Coolers & Refrigeración`
    } else if (categoria == 7){
        productosFinal = productos.filter(producto => producto.categoria == "Motherboard" )
        titulo.innerHTML = `Motherboards`
    } else if (categoria == 8){
        productosFinal = productos.filter(producto => producto.categoria == "RAM" )
        titulo.innerHTML = `Memorias RAM`
    } else if (categoria == 9){
        productosFinal = productos.filter(producto => producto.categoria == "Almacenamiento" )
        titulo.innerHTML = `Unidades de Almacenamiento`
    } else if (categoria == 10){
        productosFinal = productos.filter(producto => producto.categoria == "GPU" && producto.fabricante == "NVIDIA")
        titulo.innerHTML = `Tarjetas Graficás NVIDIA`
    } else if (categoria == 11){
        productosFinal = productos.filter(producto => producto.categoria == "GPU" && producto.fabricante == "AMD")
        titulo.innerHTML = `Tarjetas Graficás AMD`
    } else if (categoria == 12){
        productosFinal = productos.filter(producto => producto.categoria == "Gabinete")
        titulo.innerHTML = `Gabinetes`
    } else if (categoria == 13){
        productosFinal = productos.filter(producto => producto.categoria == "Fuente")
        titulo.innerHTML = `Fuentes de Alimentación`
    } else if (categoria == 14){
        productosFinal = productos.filter(producto => producto.categoria == "Pantalla" )
        titulo.innerHTML = `Pantallas & Monitores`
    } else if (categoria == 15){
        productosFinal = productos.filter(producto => producto.categoria == "Teclado" )
        titulo.innerHTML = `Teclados`
    } else if (categoria == 16){
        productosFinal = productos.filter(producto => producto.categoria == "Mouse" )
        titulo.innerHTML = `Mouses`
    } else if (categoria == 17){
        productosFinal = productos.filter(producto => producto.categoria == "Auriculares" )
        titulo.innerHTML = `Auriculares`
    } else if (categoria == 18){
        productosFinal = productos.filter(producto => producto.categoria != "Auriculares" && producto.categoria != "PC" && producto.categoria != "Notebook" && producto.categoria != "Consola" && producto.categoria != "Procesador" && producto.categoria != "Refrigeración" && producto.categoria != "Motherboard" && producto.categoria != "RAM" && producto.categoria != "Almacenamiento" && producto.categoria != "GPU" && producto.categoria != "Gabinete" && producto.categoria != "Fuente" && producto.categoria != "Teclado" && producto.categoria != "Mouse" && producto.categoria != "Pantalla" && producto.categoria != "Auriculares")
        titulo.innerHTML = `Otros`
    }
    return productosFinal
}

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

const imprimirCards = async () =>{
    const productos = await getCategoriaActual()
    const caja = document.getElementById(`flexBoxCards`)
    const cards = productos.map(producto => (`
    <div class="card mb-5" onclick="setX(${producto.id})">
        <div class="imgCard d-flex justify-content-center">
            <img src="${producto.portada}" class="d-img-top img-fluid p-3 imagenCard align-self-center" >
        </div>            
        <div class="card-body">
            <h5 class="card-title text-center fs-6">${producto.titulo}</h5>
            <p class="card-text text-center text-muted">$ ${producto.precio}</p>
        </div>
    </div>
    `))
    caja.innerHTML = cards
}

imprimirCards()

const setX = async (id) => {
    const productos = await fetch(`http://localhost:3000/productos/${id}`);
    const producto = await productos.json();
    localStorage.setItem("id", id)
    if (producto.categoria == "Pantalla"){
        window.location.href= "./productos/pantalla.html"
    } else if (producto.categoria == "Almacenamiento"){
        window.location.href= "./productos/almacenamiento.html"
    } else if (producto.categoria == "Procesador"){
        window.location.href= "./productos/procesadores.html"
    } else if (producto.categoria == "Motherboard"){
        window.location.href= "./productos/mother.html"
    } else if (producto.categoria == "Notebook"){
        window.location.href= "./productos/notebook.html"
    } else if (producto.categoria == "PC"){
        window.location.href= "./productos/pc.html"
    } else if (producto.categoria == "GPU"){
        window.location.href= "./productos/tarjetaGrafica.html"
    } else{
        window.location.href= "./productos/generico.html"
    }
}