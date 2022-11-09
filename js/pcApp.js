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
    const propiedad4 = document.getElementById(`os`)
    const propiedad5 = document.getElementById(`procesador`)
    const propiedad6 = document.getElementById(`gpu`)
    const propiedad7 = document.getElementById(`ram`)
    const propiedad8 = document.getElementById(`OS`)
    const propiedad9 = document.getElementById(`gabinete`)
    const propiedad10 = document.getElementById(`Procesador`)
    const propiedad11 = document.getElementById(`GPU`)
    const propiedad12 = document.getElementById(`mother`)
    const propiedad13 = document.getElementById(`Ram`)
    const propiedad14 = document.getElementById(`tipoRam`)
    const propiedad15 = document.getElementById(`fuente`)
    const propiedad16 = document.getElementById(`almacenamiento`)
    
    propiedad1.innerHTML = `${producto.titulo}`
    propiedad2.innerHTML = `${producto.marca}`
    propiedad3.innerHTML = `$ ${producto.precio}`
    propiedad4.innerHTML = `${producto.os}`
    propiedad5.innerHTML = `${producto.procesador}`
    propiedad6.innerHTML = `${producto.gpu}`
    propiedad7.innerHTML = `${producto.cantidadRam} GB ${producto.tipoRam}`
    propiedad8.innerHTML = `${producto.os}`
    propiedad9.innerHTML = `${producto.gabinete}`
    propiedad10.innerHTML = `${producto.procesador}`
    propiedad11.innerHTML = `${producto.gpu}`
    propiedad12.innerHTML = `${producto.mother}`
    propiedad13.innerHTML = `${producto.cantidadRam}`
    propiedad14.innerHTML = `${producto.tipoRam}`
    propiedad15.innerHTML = `${producto.fuente}`
    propiedad16.innerHTML = `${producto.almacenamiento}`
    
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
    window.location.href= "./categoria.html"
}