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
    const propiedad4 = document.getElementById(`frecuencia`)
    const propiedad5 = document.getElementById(`nucleos`)
    const propiedad6 = document.getElementById(`ram`)
    const propiedad7 = document.getElementById(`socket`)
    const propiedad8 = document.getElementById(`familia`)
    const propiedad9 = document.getElementById(`modelo`)
    const propiedad10 = document.getElementById(`fecha`)
    const propiedad11 = document.getElementById(`Nucleos`)
    const propiedad12 = document.getElementById(`Frecuencia`)
    const propiedad13 = document.getElementById(`gpu`)
    
    propiedad1.innerHTML = `${producto.titulo}`
    propiedad2.innerHTML = `${producto.marca}`
    propiedad3.innerHTML = `$ ${producto.precio}`
    propiedad4.innerHTML = `${producto.frecMax}`
    propiedad5.innerHTML = `${producto.nucleos}`
    propiedad6.innerHTML = `${producto.ram}`
    propiedad7.innerHTML = `${producto.socket}`
    propiedad8.innerHTML = `${producto.familia}`
    propiedad9.innerHTML = `${producto.modelo}`
    propiedad10.innerHTML = `${producto.fecha}`
    propiedad11.innerHTML = `${producto.nucleos}`
    propiedad12.innerHTML = `${producto.frecMax}`
    propiedad13.innerHTML = `${producto.gpu}`
    
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