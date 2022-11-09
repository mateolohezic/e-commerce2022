const getProducto = async () =>{
    const codigo = localStorage.getItem("id")
    const productos = await fetch(`http://localhost:3000/productos/${codigo}`);
    const producto = await productos.json();
    return producto
}

const imprimirInformacion = async () =>{
    const producto = await getProducto()
    const imagen1 = document.getElementById(`imagen1`)
    const imagen2 = document.getElementById(`imagen2`)
    const imagen3 = document.getElementById(`imagen3`)
    const propiedad1 = document.getElementById(`titulo`)
    const propiedad2 = document.getElementById(`marca`)
    const propiedad3 = document.getElementById(`precio`)
    const propiedad4 = document.getElementById(`socket`)
    const propiedad5 = document.getElementById(`chipset`)
    const propiedad6 = document.getElementById(`soportada`)
    const propiedad7 = document.getElementById(`capacidad`)
    const propiedad8 = document.getElementById(`linea`)
    const propiedad10 = document.getElementById(`modelo`)
    const propiedad11 = document.getElementById(`expansion`)
    const propiedad12 = document.getElementById(`sata`)
    const propiedad13 = document.getElementById(`hdmi`)
    const propiedad14 = document.getElementById(`vga`)
    const propiedad15 = document.getElementById(`dvi`)
    const propiedad16 = document.getElementById(`ps2`)
    const propiedad17 = document.getElementById(`usb2`)
    const propiedad18 = document.getElementById(`usb3`)
    const propiedad19 = document.getElementById(`tipoC`)
    const propiedad20 = document.getElementById(`slots`)
    
    propiedad1.innerHTML = `${producto.titulo}`
    propiedad2.innerHTML = `${producto.marca}`
    propiedad3.innerHTML = `$ ${producto.precio}`
    propiedad4.innerHTML = `${producto.socket}`
    propiedad5.innerHTML = `${producto.chipset}`
    propiedad6.innerHTML = `${producto.tipoRam}`
    propiedad7.innerHTML = `${producto.capacidadRam}`
    propiedad8.innerHTML = `${producto.linea}`
    propiedad10.innerHTML = `${producto.modelo}`
    propiedad11.innerHTML = `${producto.expansion}`
    propiedad12.innerHTML = `${producto.sata}`
    propiedad13.innerHTML = `${producto.hdmi}`
    propiedad14.innerHTML = `${producto.vga}`
    propiedad15.innerHTML = `${producto.dvi}`
    propiedad16.innerHTML = `${producto.ps2}`
    propiedad17.innerHTML = `${producto.usb2}`
    propiedad18.innerHTML = `${producto.usb3}`
    propiedad19.innerHTML = `${producto.tipoC}`
    propiedad20.innerHTML = `${producto.sata}`
    
        imagen1.innerHTML = `
        <div class="imgCarouselProductos d-flex justify-content-center">
            <img src="${producto.portada}" class="d-block imagenCarouselProductos img-fluid align-self-center" alt="Imagen 1">
        </div>
        `
        imagen2.innerHTML = `
        <div class="imgCarouselProductos d-flex justify-content-center">
            <img src="${producto.img2}" class="d-block imagenCarouselProductos img-fluid align-self-center" alt="Imagen 2">
        </div>
        `
        imagen3.innerHTML = `
        <div class="imgCarouselProductos d-flex justify-content-center">
            <img src="${producto.img3}" class="d-block imagenCarouselProductos img-fluid align-self-center" alt="Imagen 3">
        </div>
        `

    const stockDisponible = document.getElementById(`stockDisponible`)
    const botonCompra = document.getElementById(`botonCompra`)

    if(producto.stock > 0){
        stockDisponible.innerHTML = `<span class="text-success"><i class="bi bi-check-lg"></i>    Stock disponible</span> `
        botonCompra.innerHTML = ` <button type="button" class="btn btn-secondary">Comprar</button> `
    } else if (producto.stock == 0){
        stockDisponible.innerHTML = `<span class="text-danger"><i class="bi bi-dash-circle-fill"></i>    No hay stock disponible</span> `
        botonCompra.innerHTML = ` `
    }

}

imprimirInformacion()

const setCategoria = async (numeroCat) => {
    localStorage.setItem("categoria", numeroCat)
    window.location.href= "../categoria.html"
}


const getProductos = async () => {
    const resultado = await fetch('http://localhost:3000/productos/');
    const resultados = await resultado.json();
    const resultadoo = resultados.filter(producto => producto.publicado == true )
    return resultadoo;
}

const imprimirNumerosCategorias = async () =>{
    const productosTotales = await getProductos()
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