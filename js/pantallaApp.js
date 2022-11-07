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
    const propiedad4 = document.getElementById(`tamaño`)
    const propiedad5 = document.getElementById(`resolucion`)
    const propiedad6 = document.getElementById(`panel`)
    const propiedad7 = document.getElementById(`frecuencia`)
    const propiedad8 = document.getElementById(`modelo`)
    const propiedad9 = document.getElementById(`Resolucion`)
    const propiedad10 = document.getElementById(`Frencuencia`)
    const propiedad11 = document.getElementById(`tipo`)
    const propiedad12 = document.getElementById(`contraste`)
    const propiedad13 = document.getElementById(`brillo`)
    const propiedad14 = document.getElementById(`ancho`)
    const propiedad15 = document.getElementById(`alto`)
    const propiedad16 = document.getElementById(`tiempo`)
    
    propiedad1.innerHTML = `${producto.titulo}`
    propiedad2.innerHTML = `${producto.marca}`
    propiedad3.innerHTML = `$ ${producto.precio}`
    propiedad4.innerHTML = `${producto.tamaño}`
    propiedad5.innerHTML = `${producto.resolucion}`
    propiedad6.innerHTML = `${producto.panel}`
    propiedad7.innerHTML = `${producto.frecuencia}`
    propiedad8.innerHTML = `${producto.modelo}`
    propiedad9.innerHTML = `${producto.resolucion}`
    propiedad10.innerHTML = `${producto.frecuencia}`
    propiedad11.innerHTML = `${producto.panel}`
    propiedad12.innerHTML = `${producto.contraste}`
    propiedad13.innerHTML = `${producto.brillo}`
    propiedad14.innerHTML = `${producto.ancho}`
    propiedad15.innerHTML = `${producto.alto}`
    propiedad16.innerHTML = `${producto.tiempo}`
    
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
    
}

imprimirInformacion()