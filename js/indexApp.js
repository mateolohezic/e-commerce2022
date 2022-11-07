const getProductos = async () => {
    const resultado = await fetch('http://localhost:3000/productos/');
    const resultados = await resultado.json();
    return resultados;
}

const getUltimasNovedades = async () =>{
    const productos = await getProductos();
    productos.sort((a, b) => 0.5 - Math.random());
    const destacados = productos.slice(-8);
    const card1 = document.getElementById(`ultimasNovedades1`)
    const card2 = document.getElementById(`ultimasNovedades2`)
    const card3 = document.getElementById(`ultimasNovedades3`)
    const card4 = document.getElementById(`ultimasNovedades4`)
    const card5 = document.getElementById(`ultimasNovedades5`)
    const card6 = document.getElementById(`ultimasNovedades6`)
    const card7 = document.getElementById(`ultimasNovedades7`)
    const card8 = document.getElementById(`ultimasNovedades8`)
    
    card1.innerHTML = `
        <div class="imgCard d-flex justify-content-center" onclick="setX(${destacados[0].id})">
            <img src="${destacados[0].portada}" class="d-img-top img-fluid p-3 imagenCard align-self-center" >
        </div>            
        <div class="card-body">
            <h5 class="card-title text-center fs-6">${destacados[0].titulo}</h5>
            <p class="card-text text-center text-muted">$ ${destacados[0].precio}</p>
        </div>
    `
    card2.innerHTML = `
        <div class="imgCard d-flex justify-content-center" onclick="setX(${destacados[1].id})">
            <img src="${destacados[1].portada}" class="d-img-top img-fluid p-3 imagenCard align-self-center" >
        </div>
        <div class="card-body">
            <h5 class="card-title text-center fs-6">${destacados[1].titulo}</h5>
            <p class="card-text text-center text-muted">$ ${destacados[1].precio}</p>
        </div>
    `
    card3.innerHTML = `
        <div class="imgCard d-flex justify-content-center" onclick="setX(${destacados[2].id})">
            <img src="${destacados[2].portada}" class="d-img-top img-fluid p-3 imagenCard align-self-center" >
        </div>
        <div class="card-body">
            <h5 class="card-title text-center fs-6">${destacados[2].titulo}</h5>
            <p class="card-text text-center text-muted">$ ${destacados[2].precio}</p>
        </div>
    `
    card4.innerHTML = `
        <div class="imgCard d-flex justify-content-center" onclick="setX(${destacados[3].id})">   
            <img src="${destacados[3].portada}" class="d-img-top img-fluid p-3 imagenCard align-self-center">
        </div>
        <div class="card-body">
            <h5 class="card-title text-center fs-6">${destacados[3].titulo}</h5>
            <p class="card-text text-center text-muted">$ ${destacados[3].precio}</p>
        </div>
    `
    card5.innerHTML = `
        <div class="imgCard d-flex justify-content-center" onclick="setX(${destacados[4].id})">
            <img src="${destacados[4].portada}" class="d-img-top img-fluid p-3 imagenCard align-self-center">
        </div>
        <div class="card-body">
            <h5 class="card-title text-center fs-6">${destacados[4].titulo}</h5>
            <p class="card-text text-center text-muted">$ ${destacados[4].precio}</p>
        </div>
    `
    card6.innerHTML = `
        <div class="imgCard d-flex justify-content-center" onclick="setX(${destacados[5].id})">
            <img src="${destacados[5].portada}" class="d-img-top img-fluid p-3 imagenCard align-self-center" >
        </div>
        <div class="card-body">
            <h5 class="card-title text-center fs-6">${destacados[5].titulo}</h5>
            <p class="card-text text-center text-muted">$ ${destacados[5].precio}</p>
        </div>
    `
    card7.innerHTML = `
        <div class="imgCard d-flex justify-content-center" onclick="setX(${destacados[6].id})">
            <img src="${destacados[6].portada}" class="d-img-top img-fluid p-3 imagenCard align-self-center" >
        </div>
        <div class="card-body">
            <h5 class="card-title text-center fs-6">${destacados[6].titulo}</h5>
            <p class="card-text text-center text-muted">$ ${destacados[6].precio}</p>
        </div>
    `
    card8.innerHTML = `
        <div class="imgCard d-flex justify-content-center" onclick="setX(${destacados[7].id})">
            <img src="${destacados[7].portada}" class="d-img-top img-fluid p-3 imagenCard align-self-center" >
        </div>
        <div class="card-body">
            <h5 class="card-title text-center fs-6">${destacados[7].titulo}</h5>
            <p class="card-text text-center text-muted">$ ${destacados[7].precio}</p>
        </div>
    `

    const card1Chico= document.getElementById(`ultimasNovedadesChico1`)

    card1Chico.innerHTML = `
        <div class="imgCard d-flex justify-content-center" onclick="setX(${destacados[0].id})">
            <img src="${destacados[0].portada}" class="d-img-top img-fluid p-3 imagenCard align-self-center" >
        </div>
        <div class="card-body">
            <h5 class="card-title text-center fs-6">${destacados[0].titulo}</h5>
            <p class="card-text text-center text-muted">$ ${destacados[0].precio}</p>
        </div>
    `

    const cardsChico = document.getElementById(`carouselChicoNovedades`)
    const destacadosUltimo = destacados.slice(-7);
    const cardsChicas = destacadosUltimo.map(producto => (`
        <div class="carousel-item">
            <div class="card" onclick="setX(${producto.id})">
                <div class="imgCard d-flex justify-content-center">
                    <img src="${producto.portada}" class="d-img-top img-fluid p-3 imagenCard align-self-center" >
                </div>
                <div class="card-body">
                    <h5 class="card-title text-center fs-6">${producto.titulo}</h5>
                    <p class="card-text text-center text-muted">$ ${producto.precio}</p>
                </div>
            </div>
        </div>
    `))

    cardsChico.innerHTML = cardsChicas
}

getUltimasNovedades()

const getDestacados = async () =>{
    const productos = await getProductos();
    const destacadosTodos = productos.filter(producto => producto.favorito == true )
    destacadosTodos.sort((a, b) => 0.5 - Math.random());
    const destacados = destacadosTodos.slice(-8);
    const card1 = document.getElementById(`destacados1`)
    const card2 = document.getElementById(`destacados2`)
    const card3 = document.getElementById(`destacados3`)
    const card4 = document.getElementById(`destacados4`)
    const card5 = document.getElementById(`destacados5`)
    const card6 = document.getElementById(`destacados6`)
    const card7 = document.getElementById(`destacados7`)
    const card8 = document.getElementById(`destacados8`)
    
    card1.innerHTML = `
        <div class="imgCard d-flex justify-content-center">
            <img src="${destacados[0].portada}" class="d-img-top img-fluid p-3 imagenCard align-self-center" >
        </div>            
        <div class="card-body">
            <h5 class="card-title text-center fs-6">${destacados[0].titulo}</h5>
            <p class="card-text text-center text-muted">$ ${destacados[0].precio}</p>
        </div>
    `
    card2.innerHTML = `
        <div class="imgCard d-flex justify-content-center">
            <img src="${destacados[1].portada}" class="d-img-top img-fluid p-3 imagenCard align-self-center" >
        </div>
        <div class="card-body">
            <h5 class="card-title text-center fs-6">${destacados[1].titulo}</h5>
            <p class="card-text text-center text-muted">$ ${destacados[1].precio}</p>
        </div>
    `
    card3.innerHTML = `
        <div class="imgCard d-flex justify-content-center">
            <img src="${destacados[2].portada}" class="d-img-top img-fluid p-3 imagenCard align-self-center" >
        </div>
        <div class="card-body">
            <h5 class="card-title text-center fs-6">${destacados[2].titulo}</h5>
            <p class="card-text text-center text-muted">$ ${destacados[2].precio}</p>
        </div>
    `
    card4.innerHTML = `
        <div class="imgCard d-flex justify-content-center">   
            <img src="${destacados[3].portada}" class="d-img-top img-fluid p-3 imagenCard align-self-center">
        </div>
        <div class="card-body">
            <h5 class="card-title text-center fs-6">${destacados[3].titulo}</h5>
            <p class="card-text text-center text-muted">$ ${destacados[3].precio}</p>
        </div>
    `
    card5.innerHTML = `
        <div class="imgCard d-flex justify-content-center">
            <img src="${destacados[4].portada}" class="d-img-top img-fluid p-3 imagenCard align-self-center">
        </div>
        <div class="card-body">
            <h5 class="card-title text-center fs-6">${destacados[4].titulo}</h5>
            <p class="card-text text-center text-muted">$ ${destacados[4].precio}</p>
        </div>
    `
    card6.innerHTML = `
        <div class="imgCard d-flex justify-content-center">
            <img src="${destacados[5].portada}" class="d-img-top img-fluid p-3 imagenCard align-self-center" >
        </div>
        <div class="card-body">
            <h5 class="card-title text-center fs-6">${destacados[5].titulo}</h5>
            <p class="card-text text-center text-muted">$ ${destacados[5].precio}</p>
        </div>
    `
    card7.innerHTML = `
        <div class="imgCard d-flex justify-content-center">
            <img src="${destacados[6].portada}" class="d-img-top img-fluid p-3 imagenCard align-self-center" >
        </div>
        <div class="card-body">
            <h5 class="card-title text-center fs-6">${destacados[6].titulo}</h5>
            <p class="card-text text-center text-muted">$ ${destacados[6].precio}</p>
        </div>
    `
    card8.innerHTML = `
        <div class="imgCard d-flex justify-content-center">
            <img src="${destacados[7].portada}" class="d-img-top img-fluid p-3 imagenCard align-self-center" >
        </div>
        <div class="card-body">
            <h5 class="card-title text-center fs-6">${destacados[7].titulo}</h5>
            <p class="card-text text-center text-muted">$ ${destacados[7].precio}</p>
        </div>
    `

    const card1Chico= document.getElementById(`destacadosChico1`)
    
    card1Chico.innerHTML = `
        <div class="imgCard d-flex justify-content-center">
            <img src="${destacados[0].portada}" class="d-img-top img-fluid p-3 imagenCard align-self-center" >
        </div>
        <div class="card-body">
            <h5 class="card-title text-center fs-6">${destacados[0].titulo}</h5>
            <p class="card-text text-center text-muted">$ ${destacados[0].precio}</p>
        </div>
    `

    const cardsChico = document.getElementById(`carouselChicoDestacados`)
    const destacadosUltimo = destacados.slice(-7);
    const cardsChicas = destacadosUltimo.map(producto => (`
        <div class="carousel-item">
            <div class="card">
                <div class="imgCard d-flex justify-content-center">
                    <img src="${producto.portada}" class="d-img-top img-fluid p-3 imagenCard align-self-center" >
                </div>
                <div class="card-body">
                    <h5 class="card-title text-center fs-6">${producto.titulo}</h5>
                    <p class="card-text text-center text-muted">$ ${producto.precio}</p>
                </div>
            </div>
        </div>
    `))

    cardsChico.innerHTML = cardsChicas
}

getDestacados()

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