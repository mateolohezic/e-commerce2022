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
    const propiedad4 = document.getElementById(`pci`)
    const propiedad5 = document.getElementById(`nucleos`)
    const propiedad6 = document.getElementById(`resolucion`)
    const propiedad7 = document.getElementById(`memoria`)
    const propiedad8 = document.getElementById(`fabricante`)
    const propiedad9 = document.getElementById(`Marca`)
    const propiedad10 = document.getElementById(`familia`)
    const propiedad11 = document.getElementById(`modelo`)
    const propiedad12 = document.getElementById(`tamaño`)
    const propiedad13 = document.getElementById(`tipo`)
    const propiedad14 = document.getElementById(`conectividad`)
    const propiedad15 = document.getElementById(`Resolucion`)
    const propiedad16 = document.getElementById(`fecha`)
    
    propiedad1.innerHTML = `${producto.titulo}`
    propiedad2.innerHTML = `${producto.marca}`
    propiedad3.innerHTML = `$ ${producto.precio}`
    propiedad4.innerHTML = `${producto.pci}`
    propiedad5.innerHTML = `${producto.nucleos}`
    propiedad6.innerHTML = `${producto.resMax}`
    propiedad7.innerHTML = `${producto.tamaño}`
    propiedad8.innerHTML = `${producto.fabricante}`
    propiedad9.innerHTML = `${producto.marca}`
    propiedad10.innerHTML = `${producto.familia}`
    propiedad11.innerHTML = `${producto.modelo}`
    propiedad16.innerHTML = `${producto.fecha}`
    propiedad12.innerHTML = `${producto.tamaño}`
    propiedad13.innerHTML = `${producto.tipo}`
    propiedad14.innerHTML = `${producto.conectividad}`
    propiedad15.innerHTML = `${producto.resMax}`
    
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