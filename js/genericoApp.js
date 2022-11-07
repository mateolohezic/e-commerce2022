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
    const propiedad4 = document.getElementById(`descripcion`)

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
    
    propiedad1.innerHTML = `${producto.titulo}`
    propiedad2.innerHTML = `${producto.marca}`
    propiedad3.innerHTML = `$ ${producto.precio}`
    propiedad4.innerHTML = `${producto.descripcion}`

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