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
    window.location.href= "./categoria.html"
}