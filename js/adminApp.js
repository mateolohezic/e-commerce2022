const getProductos = async () => {
    const resultado = await fetch('http://localhost:3000/productos/');
    const resultados = await resultado.json();
    resultados.sort((a,b) => (a.cod > b.cod) ? 1 : ((b.cod > a.cod) ? -1 : 0))
    resultados.sort((a, b) => +b.favorito-a.favorito)
    
    return resultados;
  }

const añadirProcesador = (x) =>{
    const titulo = document.getElementById ("nombreProcesador").value
    const marca = document.getElementById ("marcaProcesador").value
    const socket = document.getElementById ("socketProcesador").value
    const familia = document.getElementById ("familiaProcesador").value
    const modelo = document.getElementById ("modeloProcesador").value
    const nucleos = document.getElementById ("nucleosProcesador").value
    const ram = document.getElementById ("ramProcesador").value
    const fecha = document.getElementById ("fechaProcesador").value
    const gpu = document.getElementById ("gpuProcesador").value
    const frecMax = document.getElementById ("frecuenciaMaxProcesador").value
    const precio = document.getElementById ("priceProcesador").value
    const cod = document.getElementById ("codProcesador").value
    const portada = document.getElementById ("image1Procesador").value
    const img2 = document.getElementById ("image2Procesador").value
    const img3 = document.getElementById ("image3Procesador").value
    const stock = document.getElementById ("stockProcesador").value
    const categoria = "Procesador"
    const oferta = false
    const favorito = false
    const publicado = true
  
    fetch("http://localhost:3000/productos", {  
      method:"POST",
      body: JSON.stringify({
        titulo,
        marca,
        socket,
        familia,
        modelo,
        nucleos,
        ram,
        fecha,
        gpu,
        frecMax,
        precio,
        cod,
        portada,
        img2,
        img3,
        stock,
        categoria,
        oferta,
        favorito,
        publicado
      }),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
    })

  }
  
const añadirGPU = () =>{
    const titulo = document.getElementById ("nombreGPU").value
    const marca = document.getElementById ("marcaGPU").value
    const fabricante = document.getElementById ("fabricanteGPU").value
    const familia = document.getElementById ("familiaGPU").value
    const modelo = document.getElementById ("modeloGPU").value
    const tamaño = document.getElementById ("tamañoGPU").value
    const tipo = document.getElementById ("tipoGPU").value
    const fecha = document.getElementById ("fechaGPU").value
    const conectividad = document.getElementById ("conectividadGPU").value
    const resMax = document.getElementById ("resMaxGPU").value
    const pci = document.getElementById ("pciGPU").value
    const nucleos = document.getElementById ("nucleosGPU").value
    const precio = document.getElementById ("priceGPU").value
    const cod = document.getElementById ("codGPU").value
    const portada = document.getElementById ("image1GPU").value
    const img2 = document.getElementById ("image2GPU").value
    const img3 = document.getElementById ("image3GPU").value
    const stock = document.getElementById ("stockGPU").value
    const categoria = "GPU"
    const oferta = false
    const favorito = false
    const publicado = true

    fetch("http://localhost:3000/productos", {  
        method:"POST",
        body: JSON.stringify({
            titulo,
            marca,
            fabricante,
            familia,
            modelo,
            tamaño,
            tipo,
            fecha,
            conectividad,
            resMax,
            pci,
            nucleos,
            precio,
            cod,
            portada,
            img2,
            img3,
            stock,
            categoria,
            oferta,
            favorito,
            publicado
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

}

const añadirPC = () =>{
    const titulo = document.getElementById ("nombrePC").value
    const marca = document.getElementById ("marcaPC").value
    const fabricante = document.getElementById ("fabricantePC").value
    const os = document.getElementById ("osPC").value
    const procesador = document.getElementById ("procesadorPC").value
    const cantidadRam = document.getElementById ("cantidadPC").value
    const tipoRam = document.getElementById ("tipoPC").value
    const almacenamiento = document.getElementById ("almacenamientoPC").value
    const gpu = document.getElementById ("gpuPC").value
    const mother = document.getElementById ("motherPC").value
    const gabinete = document.getElementById ("gabinetePC").value
    const fuente = document.getElementById ("fuentePC").value
    const precio = document.getElementById ("pricePC").value
    const cod = document.getElementById ("codPC").value
    const portada = document.getElementById ("image1PC").value
    const img2 = document.getElementById ("image2PC").value
    const img3 = document.getElementById ("image3PC").value
    const stock = document.getElementById ("stockPC").value
    const categoria = "PC"
    const oferta = false
    const favorito = false
    const publicado = true

    fetch("http://localhost:3000/productos", {  
        method:"POST",
        body: JSON.stringify({
            titulo,
            marca,
            fabricante,
            os,
            procesador,
            cantidadRam,
            tipoRam,
            almacenamiento,
            gpu,
            mother,
            gabinete,
            fuente,
            precio,
            cod,
            portada,
            img2,
            img3,
            stock,
            categoria,
            oferta,
            favorito,
            publicado
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

}

const añadirNotebook = () =>{
    const titulo = document.getElementById ("nombreNotebook").value
    const marca = document.getElementById ("marcaNotebook").value
    const linea = document.getElementById ("lineaNotebook").value
    const modelo = document.getElementById ("modeloNotebook").value
    const procesador = document.getElementById ("procesadorNotebook").value
    const cantidadRam = document.getElementById ("cantidadNotebook").value
    const tipoRam = document.getElementById ("tipoNotebook").value
    const almacenamiento = document.getElementById ("almacenamientoNotebook").value
    const gpu = document.getElementById ("gpuNotebook").value
    const pantalla = document.getElementById ("pantallaNotebook").value
    const resolucion = document.getElementById ("resolucionNotebook").value
    const frecuencia = document.getElementById ("frecuenciaNotebook").value
    const precio = document.getElementById ("priceNotebook").value
    const cod = document.getElementById ("codNotebook").value
    const portada = document.getElementById ("image1Notebook").value
    const img2 = document.getElementById ("image2Notebook").value
    const img3 = document.getElementById ("image3Notebook").value
    const stock = document.getElementById ("stockNotebook").value
    const categoria = "Notebook"
    const oferta = false
    const favorito = false
    const publicado = true

    fetch("http://localhost:3000/productos", {  
        method:"POST",
        body: JSON.stringify({
            titulo,
            marca,
            linea,
            modelo,
            procesador,
            cantidadRam,
            tipoRam,
            almacenamiento,
            gpu,
            pantalla,
            resolucion,
            frecuencia,
            precio,
            cod,
            portada,
            img2,
            img3,
            stock,
            categoria,
            oferta,
            favorito,
            publicado
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

}

const añadirMother = () =>{
    const titulo = document.getElementById ("nombreMother").value
    const marca = document.getElementById ("marcaMother").value
    const linea = document.getElementById ("lineaMother").value
    const modelo = document.getElementById ("modeloMother").value
    const socket = document.getElementById ("socketMother").value
    const expansion = document.getElementById ("expMother").value
    const chipset = document.getElementById ("chipsetMother").value
    const tipoRam = document.getElementById ("ramMother").value
    const capacidadRam = document.getElementById ("capacidadMother").value
    const slotsRam = document.getElementById ("slotsMother").value
    const hdmi = document.getElementById ("hdmiMother").value
    const vga = document.getElementById ("vgaMother").value
    const dvi = document.getElementById ("dviMother").value
    const ps2 = document.getElementById ("ps2Mother").value
    const usb2 = document.getElementById ("usb2Mother").value
    const usb3 = document.getElementById ("usb3Mother").value
    const tipoC = document.getElementById ("cMother").value
    const sata = document.getElementById ("sataMother").value
    const precio = document.getElementById ("priceMother").value
    const cod = document.getElementById ("codMother").value
    const portada = document.getElementById ("image1Mother").value
    const img2 = document.getElementById ("image2Mother").value
    const img3 = document.getElementById ("image3Mother").value
    const stock = document.getElementById ("stockMother").value
    const categoria = "Motherboard"
    const oferta = false
    const favorito = false
    const publicado = true

    fetch("http://localhost:3000/productos", {  
        method:"POST",
        body: JSON.stringify({
            titulo,
            marca,
            linea,
            modelo,
            socket,
            expansion,
            chipset,
            tipoRam,
            capacidadRam,
            slotsRam,
            hdmi,
            vga,
            dvi,
            ps2,
            usb2,
            usb3,
            tipoC,
            sata,
            precio,
            cod,
            portada,
            img2,
            img3,
            stock,
            categoria,
            oferta,
            favorito,
            publicado
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

}

const añadirAlmacenamiento = () =>{
    const titulo = document.getElementById ("nombreAlmacenamiento").value
    const marca = document.getElementById ("marcaAlmacenamiento").value
    const tipo = document.getElementById ("tipoAlmacenamiento").value
    const modelo = document.getElementById ("modeloAlmacenamiento").value
    const capacidad = document.getElementById ("capacidadAlmacenamiento").value
    const velLec = document.getElementById ("velLecAlmacenamiento").value
    const velEsc = document.getElementById ("velEscAlmacenamiento").value
    const conexion = document.getElementById ("conexionAlmacenamiento").value
    const consumo = document.getElementById ("consumoAlmacenamiento").value
    const cache = document.getElementById ("cacheAlmacenamiento").value
    const precio = document.getElementById ("priceAlmacenamiento").value
    const cod = document.getElementById ("codAlmacenamiento").value
    const portada = document.getElementById ("image1Almacenamiento").value
    const img2 = document.getElementById ("image2Almacenamiento").value
    const img3 = document.getElementById ("image3Almacenamiento").value
    const stock = document.getElementById ("stockAlmacenamiento").value
    const categoria = "Almacenamiento"
    const oferta = false
    const favorito = false
    const publicado = true

    fetch("http://localhost:3000/productos", {  
        method:"POST",
        body: JSON.stringify({
            titulo,
            marca,
            tipo,
            modelo,
            capacidad,
            velLec,
            velEsc,
            conexion,
            consumo,
            cache,
            precio,
            cod,
            portada,
            img2,
            img3,
            stock,
            categoria,
            oferta,
            favorito,
            publicado
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

}

const añadirPantalla = () =>{
    const titulo = document.getElementById ("nombrePantalla").value
    const marca = document.getElementById ("marcaPantalla").value
    const tamaño = document.getElementById ("tamañoPantalla").value
    const modelo = document.getElementById ("modeloPantalla").value
    const resolucion = document.getElementById ("resolucionPantalla").value
    const panel = document.getElementById ("panelPantalla").value
    const frecuencia = document.getElementById ("frecuenciaPantalla").value
    const contraste = document.getElementById ("contrastePantalla").value
    const brillo = document.getElementById ("brilloPantalla").value
    const tiempo = document.getElementById ("tiempoPantalla").value
    const ancho = document.getElementById ("anchoPantalla").value
    const alto = document.getElementById ("altoPantalla").value
    const precio = document.getElementById ("pricePantalla").value
    const cod = document.getElementById ("codPantalla").value
    const portada = document.getElementById ("image1Pantalla").value
    const img2 = document.getElementById ("image2Pantalla").value
    const img3 = document.getElementById ("image3Pantalla").value
    const stock = document.getElementById ("stockPantalla").value
    const categoria = "Pantalla"
    const oferta = false
    const favorito = false
    const publicado = true

    fetch("http://localhost:3000/productos", {  
        method:"POST",
        body: JSON.stringify({
            titulo,
            marca,
            tamaño,
            modelo,
            resolucion,
            panel,
            frecuencia,
            contraste,
            brillo,
            tiempo,
            ancho,
            alto,
            precio,
            cod,
            portada,
            img2,
            img3,
            stock,
            categoria,
            oferta,
            favorito,
            publicado
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

}

const añadirOtro = () =>{
    const titulo = document.getElementById ("nombreOtro").value
    const marca = document.getElementById ("marcaOtro").value
    const descripcion = document.getElementById ("descripcionOtro").value
    const categoria = document.getElementById ("categoriaOtro").value
    const precio = document.getElementById ("priceOtro").value
    const cod = document.getElementById ("codOtro").value
    const portada = document.getElementById ("image1Otro").value
    const img2 = document.getElementById ("image2Otro").value
    const img3 = document.getElementById ("image3Otro").value
    const stock = document.getElementById ("stockOtro").value
    const oferta = false
    const favorito = false
    const publicado = true

    fetch("http://localhost:3000/productos", {  
        method:"POST",
        body: JSON.stringify({
            titulo,
            marca,
            descripcion,
            precio,
            cod,
            portada,
            img2,
            img3,
            stock,
            categoria,
            oferta,
            favorito,
            publicado
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

}


const imprimirTabla = async () => {
    const productos = await getProductos();
    const tabla = document.getElementById ("tabla");
    const filas = productos.map(producto => (`
      <tr>
          <td>${producto.cod}<img src="${producto.portada}" width="0" height="0" onload= "imprimirFavorito(${producto.id}); imprimirPublicado(${producto.id}); imprimirEditar(${producto.id})"></td>
          <td>${producto.titulo}</td>
          <td>${producto.categoria}</td>
          <td>$ ${producto.precio}</td>
          <td>${producto.stock}</td>
          <td>
            <div id="publicado${producto.id}">
            </div>
          </td>
          <td>
            <div class="d-flex justify-content-evenly" >                                    
              <div id="estrellaFav${producto.id}">
              </div>
              <div>
                <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#editar${producto.id}"><i class="bi bi-pencil-fill"></i></button>
              </div>
              <div>
                <button type="button" class="btn btn-secondary"  data-bs-toggle="modal" data-bs-target="#borrarProducto${producto.id}"><i class="bi bi-trash"></i></button>
              </div>
            </div>
          </td>
      </tr>

      <div class="modal fade" id="borrarProducto${producto.id}" tabindex="-1" aria-labelledby="borrarProducto${producto.id}Label" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content bgColor2">
            <div class="modal-body">
              <h1 class="modal-title fs-5 mb-1mt-3" id="borrarProducto${producto.id}Label">¿Estas seguro?</h1>
              <div class="fs-6 text-muted mb-4 ">No podrás deshacer esto</div>
              <div class="d-flex justify-content-evenly mb-4">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-danger" onclick="eliminarProducto(${producto.id})">Borrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="editarModal${producto.id}"></div>
      `)).join('')  
  tabla.innerHTML = filas
}

imprimirTabla()

const imprimirFavorito = async (id) =>{
    const resultado = await fetch(`http://localhost:3000/productos/${id}`);
    const resultados = await resultado.json();
    const x = document.getElementById(`estrellaFav${id}`)
  
    if(resultados.favorito){
        x.innerHTML = `<button type="button" class="btn btn-secondary"  onclick="quitarFavorito(${id})"><i class="bi bi-star-fill"></i></button>`
    }
    else{
        x.innerHTML = `<button type="button" class="btn btn-secondary"  onclick="agregarFavorito(${id})"><i class="bi bi-star"></i></button>`
    }
  }

  const agregarFavorito = async (id) =>{ 
    const favorito = true
  
    await fetch(`http://localhost:3000/productos/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        favorito,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    imprimirFavorito()
  }
  
  const quitarFavorito = async (id) =>{
    const favorito = false
    console.log("hola");
    await fetch(`http://localhost:3000/productos/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        favorito,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    imprimirFavorito()
  }

  const imprimirPublicado = async (id) =>{
    const resultado = await fetch(`http://localhost:3000/productos/${id}`);
    const resultados = await resultado.json();
    const x = document.getElementById(`publicado${id}`)
  
    if(resultados.publicado){
      x.innerHTML = `<button type="button" class="btn btn-secondary"  onclick="quitarPublicado(${id})"><i class="bi bi-bag-check-fill"></i></button>`
    }
    else{
      x.innerHTML = `<button type="button" class="btn btn-secondary"  onclick="agregarPublicado(${id})"><i class="bi bi-bag-check"></i></button>`
    }
  }
  
  const agregarPublicado = async (id) =>{
    const publicado = true
  
    await fetch(`http://localhost:3000/productos/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        publicado,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    imprimirPublicado()
  }
  
  const quitarPublicado = async (id) =>{
    const publicado = false
  
    await fetch(`http://localhost:3000/productos/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        publicado,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    imprimirPublicado()
  }

  const eliminarProducto = (id) =>{
    fetch(`http://localhost:3000/productos/${id}`, {
      method: 'DELETE',
    });
  }

  const coinciden = async (valor) => {
    productos = await getProductos()
    const letras = valor
    const productosCoinciden = productos.filter(producto => producto.cod.includes(`${letras}`) || producto.titulo.includes(`${letras}`) || producto.categoria.includes(`${letras}`) || producto.marca.includes(`${letras}`) || producto.titulo.toLowerCase().includes(`${letras}`) || producto.categoria.toLowerCase().includes(`${letras}`) || producto.marca.toLowerCase().includes(`${letras}`))
    return productosCoinciden
}

const barraCoinciden = async () =>{
    const valor = document.getElementById (`search`).value
    const productosCoincidentes = await coinciden (valor)
    return barraSearch(productosCoincidentes)
}

const barraSearch = (productosCoinciden) =>{
    const productos = productosCoinciden
    const tabla = document.getElementById(`tabla`)
    const filas = productos.map(producto => (`
    <tr>
        <td>${producto.cod}<img src="${producto.portada}" width="0" height="0" onload= "imprimirFavorito(${producto.id}); imprimirPublicado(${producto.id}); imprimirEditar(${producto.id})"></td>
        <td>${producto.titulo}</td>
        <td>${producto.categoria}</td>
        <td>$ ${producto.precio}</td>
        <td>${producto.stock}</td>
        <td>
        <div id="publicado${producto.id}">
        </div>
        </td>
        <td>
        <div class="d-flex justify-content-evenly" >                                    
            <div id="estrellaFav${producto.id}">
            </div>
            <div>
            <button type="button" class="btn btn-secondary"><i class="bi bi-pencil-fill"></i></button>
            </div>
            <div>
            <button type="button" class="btn btn-secondary"  onclick="eliminarProducto(${producto.id})"><i class="bi bi-trash"></i></button>
            </div>
        </div>
        </td>
    </tr>
    `)).join('')  
    tabla.innerHTML = filas
}

const imprimirEditar = async (id) =>{
  const resultado = await fetch(`http://localhost:3000/productos/${id}`);
  const producto = await resultado.json();
  const modal = document.getElementById(`editarModal${id}`)
  if (producto.categoria == "Procesador"){
  modal.innerHTML = `
  <div class="modal fade text-start" id="editar${producto.id}" tabindex="-1" aria-labelledby="editar${producto.id}Label" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header bgColor">
          <h1 class="modal-title fs-5 colorFuente" id=""editar${producto.id}Label">Editar Procesador</h1>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body bgColor colorFuente">
          <form>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="nombreProcesador" class="form-label">Nombre del Producto</label>
                <input type="text" class="form-control" id="nombreProcesador${producto.id}" value="${producto.titulo}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="marcaProcesador" class="form-label">Marca</label>
                <input type="text" class="form-control" id="marcaProcesador${producto.id}" value="${producto.marca}" required>
            </div>
            </div>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="socketProcesador" class="form-label">Socket</label>
                <input type="text" class="form-control" id="socketProcesador${producto.id}" value="${producto.socket}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="familiaProcesador" class="form-label">Familia</label>
                <input type="text" class="form-control" id="familiaProcesador${producto.id}" value="${producto.familia}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                  <label for="modeloProcesador" class="form-label">Modelo</label>
                  <input type="text" class="form-control" id="modeloProcesador${producto.id}" value="${producto.modelo}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="nucleosProcesador" class="form-label">Núcleos</label>
                <input type="number" class="form-control" id="nucleosProcesador${producto.id}" value="${producto.nucleos}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="ramProcesador" class="form-label">RAM Soportada</label>
                <input type="text" class="form-control" id="ramProcesador${producto.id}" value="${producto.ram}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                  <label for="fechaProcesador" class="form-label">Fecha de Lanzamiento</label>
                  <input type="text" class="form-control" id="fechaProcesador${producto.id}" value="${producto.fecha}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="gpuProcesador" class="form-label">GPU integrada</label>
                <input type="text" class="form-control" id="gpuProcesador${producto.id}" value="${producto.gpu}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="frecuenciaMaxProcesador" class="form-label">Frecuencia Maxima</label>
                <input type="number" class="form-control" id="frecuenciaMaxProcesador${producto.id}" value="${producto.frecMax}" step="any" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="priceProcesador" class="form-label">Precio</label>
                <input type="number" class="form-control" id="priceProcesador${producto.id}" step="any" value="${producto.precio}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="codProcesador" class="form-label">Código de Producto</label>
                <input type="text" class="form-control" id="codProcesador${producto.id}" value="${producto.cod}" required>
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="image1Procesador" class="form-label">Portada</label>
                <input type="text" class="form-control" id="image1Procesador${producto.id}" value="${producto.portada}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="image2Procesador" class="form-label">Imagen 2</label>
                <input type="text" class="form-control" id="image2Procesador${producto.id}" value="${producto.img2}" required>
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="image3Procesador" class="form-label">Imagen 3</label>
                <input type="text" class="form-control" id="image3Procesador${producto.id}" value="${producto.img3}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                  <label for="stockProcesador" class="form-label">Unidades en existencia</label>
                  <input type="number" class="form-control" id="stockProcesador${producto.id}" value="${producto.stock}" required>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn bgColor btn-outline-secondary colorFuente" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn bgColor btn-outline-secondary colorFuente" onclick="editarProcesador(${producto.id})">Editar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  `
  } else if (producto.categoria == "GPU"){
  modal.innerHTML = `
  <div class="modal fade text-start" id="editar${producto.id}" tabindex="-1" aria-labelledby="editar${producto.id}Label" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header bgColor">
          <h1 class="modal-title fs-5 colorFuente" id=""editar${producto.id}Label">Editar Tarjeta Gráfica</h1>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body bgColor colorFuente">
          <form>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="nombreGPU" class="form-label">Nombre del Producto</label>
                <input type="text" class="form-control" id="nombreGPU${producto.id}" value="${producto.titulo}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="marcaGPU" class="form-label">Marca</label>
                <input type="text" class="form-control" id="marcaGPU${producto.id}" value="${producto.marca}" required>
            </div>
            </div>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="fabricanteGPU" class="form-label">Fabricante</label>
                <input type="text" class="form-control" id="fabricanteGPU${producto.id}" value="${producto.fabricante}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="familiaGPU" class="form-label">Familia</label>
                <input type="text" class="form-control" id="familiaGPU${producto.id}" value="${producto.familia}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                  <label for="modeloGPU" class="form-label">Modelo</label>
                  <input type="text" class="form-control" id="modeloGPU${producto.id}" value="${producto.modelo}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="tamañoGPU" class="form-label">Tamaño de la memoria</label>
                <input type="number" class="form-control" id="tamañoGPU${producto.id}" value="${producto.tamaño}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="tipoGPU" class="form-label">Tipo de memoria</label>
                <input type="text" class="form-control" id="tipoGPU${producto.id}" value="${producto.tipo}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                  <label for="fechaGPU" class="form-label">Fecha de Lanzamiento</label>
                  <input type="text" class="form-control" id="fechaGPU${producto.id}" value="${producto.fecha}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="conectividadGPU" class="form-label">Conectividad</label>
                <input type="text" class="form-control" id="conectividadGPU${producto.id}" value="${producto.conectividad}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="resMaxGPU" class="form-label">Resolución maxima</label>
                <input type="text" class="form-control" id="resMaxGPU${producto.id}" value="${producto.resMax}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="pciGPU" class="form-label">Interfaz PCI-Express</label>
                <input type="text" class="form-control" id="pciGPU${producto.id}" value="${producto.pci}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="nucleosGPU" class="form-label">Cantidad de núcleos</label>
                <input type="number" class="form-control" id="nucleosGPU${producto.id}" value="${producto.nucleos}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="priceGPU" class="form-label">Precio</label>
                <input type="number" class="form-control" id="priceGPU${producto.id}" value="${producto.precio}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="codGPU" class="form-label">Código de Producto</label>
                <input type="text" class="form-control" id="codGPU${producto.id}" value="${producto.cod}" required>
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="image1GPU" class="form-label">Portada</label>
                <input type="text" class="form-control" id="image1GPU${producto.id}" value="${producto.portada}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="image2GPU" class="form-label">Imagen 2</label>
                <input type="text" class="form-control" id="image2GPU${producto.id}" value="${producto.img2}" required>
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="image3GPU" class="form-label">Imagen 3</label>
                <input type="text" class="form-control" id="image3GPU${producto.id}" value="${producto.img3}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                  <label for="stockGPU" class="form-label">Unidades en existencia</label>
                  <input type="number" class="form-control" id="stockGPU${producto.id}" value="${producto.stock}" required>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn bgColor btn-outline-secondary colorFuente" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn bgColor btn-outline-secondary colorFuente" onclick="editarGPU(${producto.id})">Editar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  `
  } else if (producto.categoria == "PC"){
  modal.innerHTML = `
  <div class="modal fade text-start" id="editar${producto.id}" tabindex="-1" aria-labelledby="editar${producto.id}Label" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header bgColor">
          <h1 class="modal-title fs-5 colorFuente" id="editar${producto.id}Label">Editar PC</h1>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body bgColor colorFuente">
          <form>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="nombrePC" class="form-label">Nombre del producto</label>
                <input type="text" class="form-control" id="nombrePC${producto.id}" value="${producto.titulo}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="marcaPC" class="form-label">Marca</label>
                <input type="text" class="form-control" id="marcaPC${producto.id}" value="${producto.marca}" required>
            </div>
            </div>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="fabricantePC" class="form-label">Fabricante</label>
                <input type="text" class="form-control" id="fabricantePC${producto.id}" value="${producto.fabricante}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="osPC" class="form-label">Sistema Operativo</label>
                <input type="text" class="form-control" id="osPC${producto.id}" value="${producto.os}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                  <label for="procesadorPC" class="form-label">Procesador</label>
                  <input type="text" class="form-control" id="procesadorPC${producto.id}" value="${producto.procesador}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="cantidadPC" class="form-label">Cantidad de memoria RAM</label>
                <input type="number" class="form-control" id="cantidadPC${producto.id}" value="${producto.cantidadRam}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="tipoPC" class="form-label">Tipo de memoria RAM</label>
                <input type="text" class="form-control" id="tipoPC${producto.id}" value="${producto.tipoRam}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                  <label for="almacenamientoPC" class="form-label">Almacenamiento</label>
                  <input type="text" class="form-control" id="almacenamientoPC${producto.id}" value="${producto.almacenamiento}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="gpuPC" class="form-label">Tarjeta gráfica</label>
                <input type="text" class="form-control" id="gpuPC${producto.id}" value="${producto.gpu}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="motherPC" class="form-label">Motherboard</label>
                <input type="text" class="form-control" id="motherPC${producto.id}" value="${producto.mother}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="gabinetePC" class="form-label">Gabinete</label>
                <input type="text" class="form-control" id="gabinetePC${producto.id}" value="${producto.gabinete}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="fuentePC" class="form-label">Fuente de alimentación</label>
                <input type="text" class="form-control" id="fuentePC${producto.id}" value="${producto.fuente}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="pricePC" class="form-label">Precio</label>
                <input type="number" class="form-control" id="pricePC${producto.id}" value="${producto.precio}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="codPC" class="form-label">Código de Producto</label>
                <input type="text" class="form-control" id="codPC${producto.id}" value="${producto.cod}" required>
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="image1PC" class="form-label">Portada</label>
                <input type="text" class="form-control" id="image1PC${producto.id}" value="${producto.portada}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="image2PC" class="form-label">Imagen 2</label>
                <input type="text" class="form-control" id="image2PC${producto.id}" value="${producto.img2}" required>
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="image3PC" class="form-label">Imagen 3</label>
                <input type="text" class="form-control" id="image3PC${producto.id}" value="${producto.img3}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                  <label for="stockPC" class="form-label">Unidades en existencia</label>
                  <input type="number" class="form-control" id="stockPC${producto.id}" value="${producto.stock}" required>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn bgColor btn-outline-secondary colorFuente" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn bgColor btn-outline-secondary colorFuente" onclick="editarPC(${producto.id})">Editar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  `
  } else if (producto.categoria == "Notebook"){
  modal.innerHTML = `
  
  <div class="modal fade text-start" id="editar${producto.id}" tabindex="-1" aria-labelledby="editar${producto.id}Label" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header bgColor">
          <h1 class="modal-title fs-5 colorFuente" id="editar${producto.id}Label">Editar Notebook</h1>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body bgColor colorFuente">
          <form>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="nombreNotebook" class="form-label">Nombre del producto</label>
                <input type="text" class="form-control" id="nombreNotebook${producto.id}" value="${producto.titulo}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="marcaNotebook" class="form-label">Marca</label>
                <input type="text" class="form-control" id="marcaNotebook${producto.id}" value="${producto.marca}" required>
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="lineaNotebook" class="form-label">Linea</label>
                <input type="text" class="form-control" id="lineaNotebook${producto.id}" value="${producto.linea}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="modeloNotebook" class="form-label">Modelo</label>
                <input type="text" class="form-control" id="modeloNotebook${producto.id}" value="${producto.modelo}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                  <label for="procesadorNotebook" class="form-label">Procesador</label>
                  <input type="text" class="form-control" id="procesadorNotebook${producto.id}" value="${producto.procesador}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="cantidadNotebook" class="form-label">Cantidad de memoria RAM</label>
                <input type="number" class="form-control" id="cantidadNotebook${producto.id}" value="${producto.cantidadRam}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="tipoNotebook" class="form-label">Tipo de memoria RAM</label>
                <input type="text" class="form-control" id="tipoNotebook${producto.id}" value="${producto.tipoRam}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                  <label for="almacenamientoNotebook" class="form-label">Almacenamiento</label>
                  <input type="text" class="form-control" id="almacenamientoNotebook${producto.id}" value="${producto.almacenamiento}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="gpuNotebook" class="form-label">Tarjeta gráfica</label>
                <input type="text" class="form-control" id="gpuNotebook${producto.id}" value="${producto.gpu}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="pantallaNotebook" class="form-label">Tamaño de la pantalla</label>
                <input type="number" class="form-control" id="pantallaNotebook${producto.id}" value="${producto.pantalla}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="resolucionNotebook" class="form-label">Resolución maxima</label>
                <input type="text" class="form-control" id="resolucionNotebook${producto.id}" value="${producto.resolucion}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="frecuenciaNotebook" class="form-label">Frecuencia de actualización</label>
                <input type="number" class="form-control" id="frecuenciaNotebook${producto.id}" value="${producto.frecuencia}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="priceNotebook" class="form-label">Precio</label>
                <input type="number" class="form-control" id="priceNotebook${producto.id}" value="${producto.precio}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="codNotebook" class="form-label">Código de Producto</label>
                <input type="text" class="form-control" id="codNotebook${producto.id}" value="${producto.cod}" required>
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="image1Notebook" class="form-label">Portada</label>
                <input type="text" class="form-control" id="image1Notebook${producto.id}" value="${producto.portada}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="image2Notebook" class="form-label">Imagen 2</label>
                <input type="text" class="form-control" id="image2Notebook${producto.id}" value="${producto.img2}" required>
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="image3Notebook" class="form-label">Imagen 3</label>
                <input type="text" class="form-control" id="image3Notebook${producto.id}" value="${producto.img3}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                  <label for="stockNotebook" class="form-label">Unidades en existencia</label>
                  <input type="number" class="form-control" id="stockNotebook${producto.id}" value="${producto.stock}" required>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn bgColor btn-outline-secondary colorFuente" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn bgColor btn-outline-secondary colorFuente" onclick="editarNotebook(${producto.id})">Editar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  `
  } else if (producto.categoria == "Motherboard"){
  modal.innerHTML = `
  <div class="modal fade text-start" id="editar${producto.id}" tabindex="-1" aria-labelledby="editar${producto.id}Label" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header bgColor">
          <h1 class="modal-title fs-5 colorFuente" id="editar${producto.id}Label">Añadir Motherboard</h1>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body bgColor colorFuente">
          <form>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="nombreMother" class="form-label">Nombre del producto</label>
                <input type="text" class="form-control" id="nombreMother${producto.id}" value="${producto.titulo}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="marcaMother" class="form-label">Marca</label>
                <input type="text" class="form-control" id="marcaMother${producto.id}" value="${producto.marca}" required>
            </div>
            </div>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="lineaMother" class="form-label">Linea</label>
                <input type="text" class="form-control" id="lineaMother${producto.id}" value="${producto.linea}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="modeloMother" class="form-label">Modelo</label>
                <input type="text" class="form-control" id="modeloMother${producto.id}" value="${producto.modelo}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                  <label for="socketMother" class="form-label">Socket compatible</label>
                  <input type="text" class="form-control" id="socketMother${producto.id}" value="${producto.socket}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="expMother" class="form-label">Ranuras de expansión PCI</label>
                <input type="text" class="form-control" id="expMother${producto.id}" value="${producto.expansion}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="chipsetMother" class="form-label">Chipset Principal</label>
                <input type="text" class="form-control" id="chipsetMother${producto.id}" value="${producto.chipset}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                  <label for="ramMother" class="form-label">Tipo de RAM soportada</label>
                  <input type="text" class="form-control" id="ramMother${producto.id}" value="${producto.tipoRam}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="capacidadMother" class="form-label">Capacidad max. de RAM</label>
                <input type="number" class="form-control" id="capacidadMother${producto.id}" value="${producto.capacidadRam}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="slotsMother" class="form-label">Cantidad de slots RAM</label>
                <input type="number" class="form-control" id="slotsMother${producto.id}" value="${producto.slotsRam}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="hdmiMother" class="form-label">Salidas Hdmi</label>
                <input type="number" class="form-control" id="hdmiMother${producto.id}" value="${producto.hdmi}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="vgaMother" class="form-label">Salidas VGA</label>
                <input type="number" class="form-control" id="vgaMother${producto.id}" value="${producto.vga}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="dviMother" class="form-label">Salidas DVI</label>
                <input type="number" class="form-control" id="dviMother${producto.id}" value="${producto.dvi}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="ps2Mother" class="form-label">Puertos PS/2</label>
                <input type="number" class="form-control" id="ps2Mother${producto.id}" value="${producto.ps2}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="usb2Mother" class="form-label">Puertos USB 2.0</label>
                <input type="number" class="form-control" id="usb2Mother${producto.id}" value="${producto.usb2}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="usb3Mother" class="form-label">Puertos USB 3.0</label>
                <input type="number" class="form-control" id="usb3Mother${producto.id}" value="${producto.usb3}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="cMother" class="form-label">Puertos Type C</label>
                <input type="number" class="form-control" id="cMother${producto.id}" value="${producto.tipoC}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="sataMother" class="form-label">Puertos SATA</label>
                <input type="number" class="form-control" id="sataMother${producto.id}" value="${producto.sata}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="priceMother" class="form-label">Precio</label>
                <input type="number" class="form-control" id="priceMother${producto.id}" value="${producto.precio}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="codMother" class="form-label">Código de Producto</label>
                <input type="text" class="form-control" id="codMother${producto.id}" value="${producto.cod}" required>
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="image1Mother" class="form-label">Portada</label>
                <input type="text" class="form-control" id="image1Mother${producto.id}" value="${producto.portada}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="image2Mother" class="form-label">Imagen 2</label>
                <input type="text" class="form-control" id="image2Mother${producto.id}" value="${producto.img2}" required>
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="image3Mother" class="form-label">Imagen 3</label>
                <input type="text" class="form-control" id="image3Mother${producto.id}" value="${producto.img3}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                  <label for="stockMother" class="form-label">Unidades en existencia</label>
                  <input type="number" class="form-control" id="stockMother${producto.id}" value="${producto.stock}" required>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn bgColor btn-outline-secondary colorFuente" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn bgColor btn-outline-secondary colorFuente" onclick="editarMother(${producto.id})">Editar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  `
  } else if (producto.categoria == "Almacenamiento"){
  modal.innerHTML = `
  <div class="modal fade text-start" id="editar${producto.id}" tabindex="-1" aria-labelledby="editar${producto.id}Label" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header bgColor">
          <h1 class="modal-title fs-5 colorFuente" id="editar${producto.id}Label">Editar Unidad de Almacenamiento</h1>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body bgColor colorFuente">
          <form>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="nombreAlmacenamiento" class="form-label">Nombre del producto</label>
                <input type="text" class="form-control" id="nombreAlmacenamiento${producto.id}" value="${producto.titulo}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="marcaAlmacenamiento" class="form-label">Marca</label>
                <input type="text" class="form-control" id="marcaAlmacenamiento${producto.id}" value="${producto.marca}" required>
            </div>
            </div>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="tipoAlmacenamiento" class="form-label">Tipo</label>
                <input type="text" class="form-control" id="tipoAlmacenamiento${producto.id}" value="${producto.tipo}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="modeloAlmacenamiento" class="form-label">Modelo</label>
                <input type="text" class="form-control" id="modeloAlmacenamiento${producto.id}" value="${producto.modelo}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                  <label for="capacidadAlmacenamiento" class="form-label">Capacidad</label>
                  <input type="text" class="form-control" id="capacidadAlmacenamiento${producto.id}" value="${producto.capacidad}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="velLecAlmacenamiento" class="form-label">Velocidad de lectura</label>
                <input type="number" class="form-control" id="velLecAlmacenamiento${producto.id}" value="${producto.velLec}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="velEscAlmacenamiento" class="form-label">Velocidad de escritura</label>
                <input type="number" class="form-control" id="velEscAlmacenamiento${producto.id}" value="${producto.velEsc}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                  <label for="conexionAlmacenamiento" class="form-label">Tipo de conexión</label>
                  <input type="text" class="form-control" id="conexionAlmacenamiento${producto.id}" value="${producto.conexion}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="consumoAlmacenamiento" class="form-label">Consumo</label>
                <input type="number" class="form-control" id="consumoAlmacenamiento${producto.id}" value="${producto.consumo}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="cacheAlmacenamiento" class="form-label">Memoria Cache</label>
                <input type="number" class="form-control" id="cacheAlmacenamiento${producto.id}" value="${producto.cache}" required>
              </div>
            </div>                                                                      
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="priceAlmacenamiento" class="form-label">Precio</label>
                <input type="number" class="form-control" id="priceAlmacenamiento${producto.id}" value="${producto.precio}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="codAlmacenamiento" class="form-label">Código de Producto</label>
                <input type="text" class="form-control" id="codAlmacenamiento${producto.id}" value="${producto.cod}" required>
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="image1Almacenamiento" class="form-label">Portada</label>
                <input type="text" class="form-control" id="image1Almacenamiento${producto.id}" value="${producto.portada}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="image2Almacenamiento" class="form-label">Imagen 2</label>
                <input type="text" class="form-control" id="image2Almacenamiento${producto.id}" value="${producto.img2}" required>
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="image3Almacenamiento" class="form-label">Imagen 3</label>
                <input type="text" class="form-control" id="image3Almacenamiento${producto.id}" value="${producto.img3}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                  <label for="stockAlmacenamiento" class="form-label">Unidades en existencia</label>
                  <input type="number" class="form-control" id="stockAlmacenamiento${producto.id}" value="${producto.stock}" required>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn bgColor btn-outline-secondary colorFuente" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn bgColor btn-outline-secondary colorFuente" onclick="editarAlmacenamiento(${producto.id})">Editar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  `
  } else if (producto.categoria == "Pantalla"){
  modal.innerHTML = `
  <div class="modal fade text-start" id="editar${producto.id}" tabindex="-1" aria-labelledby="editar${producto.id}Label" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header bgColor">
          <h1 class="modal-title fs-5 colorFuente" id="editar${producto.id}Label">Editar Pantalla</h1>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body bgColor colorFuente">
          <form>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="nombrePantalla" class="form-label">Nombre del producto</label>
                <input type="text" class="form-control" id="nombrePantalla${producto.id}" value="${producto.titulo}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="marcaPantalla" class="form-label">Marca</label>
                <input type="text" class="form-control" id="marcaPantalla${producto.id}" value="${producto.marca}" required>
            </div>
            </div>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="tamañoPantalla" class="form-label">Tamaño</label>
                <input type="number" class="form-control" id="tamañoPantalla${producto.id}" value="${producto.tamaño}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="modeloPantalla" class="form-label">Modelo</label>
                <input type="text" class="form-control" id="modeloPantalla${producto.id}" value="${producto.modelo}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                  <label for="resolucionPantalla" class="form-label">Resolución</label>
                  <input type="text" class="form-control" id="resolucionPantalla${producto.id}" value="${producto.resolucion}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="panelPantalla" class="form-label">Panel</label>
                <input type="text" class="form-control" id="panelPantalla${producto.id}" value="${producto.panel}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="frecuenciaPantalla" class="form-label">Frecuencia</label>
                <input type="number" class="form-control" id="frecuenciaPantalla${producto.id}" value="${producto.frecuencia}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                  <label for="contrastePantalla" class="form-label">Contraste</label>
                  <input type="text" class="form-control" id="contrastePantalla${producto.id}" value="${producto.contraste}" required>
              </div>
            </div>                                       
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="brilloPantalla" class="form-label">Brillo</label>
                <input type="number" class="form-control" id="brilloPantalla${producto.id}" value="${producto.brillo}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="tiempoPantalla" class="form-label">Tiempo de respuesta</label>
                <input type="number" class="form-control" id="tiempoPantalla${producto.id}" value="${producto.tiempo}" required>
              </div>
            </div>                                                                      
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="anchoPantalla" class="form-label">Ancho</label>
                <input type="number" class="form-control" id="anchoPantalla${producto.id}" value="${producto.ancho}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="altoPantalla" class="form-label">Alto</label>
                <input type="number" class="form-control" id="altoPantalla${producto.id}" value="${producto.alto}" required>
              </div>
            </div>                                                                      
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="pricePantalla" class="form-label">Precio</label>
                <input type="number" class="form-control" id="pricePantalla${producto.id}" value="${producto.precio}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="codPantalla" class="form-label">Código de Producto</label>
                <input type="text" class="form-control" id="codPantalla${producto.id}" value="${producto.cod}" required>
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="image1Pantalla" class="form-label">Portada</label>
                <input type="text" class="form-control" id="image1Pantalla${producto.id}" value="${producto.portada}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="image2Pantalla" class="form-label">Imagen 2</label>
                <input type="text" class="form-control" id="image2Pantalla${producto.id}" value="${producto.img2}" required>
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="image3Pantalla" class="form-label">Imagen 3</label>
                <input type="text" class="form-control" id="image3Pantalla${producto.id}" value="${producto.img3}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                  <label for="stockPantalla" class="form-label">Unidades en existencia</label>
                  <input type="number" class="form-control" id="stockPantalla${producto.id}" value="${producto.stock}" required>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn bgColor btn-outline-secondary colorFuente" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn bgColor btn-outline-secondary colorFuente" onclick="editarPantalla(${producto.id})">Editar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  `
  } else{
  modal.innerHTML = ` 
  <div class="modal fade text-start" id="editar${producto.id}" tabindex="-1" aria-labelledby="editar${producto.id}Label" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header bgColor">
          <h1 class="modal-title fs-5 colorFuente" id="editar${producto.id}Label">Editar</h1>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body bgColor colorFuente">
          <form>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="nombreOtro" class="form-label">Nombre del producto</label>
                <input type="text" class="form-control" id="nombreOtro${producto.id}" value="${producto.titulo}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="marcaOtro" class="form-label">Marca</label>
                <input type="text" class="form-control" id="marcaOtro${producto.id}" value="${producto.marca}" required>
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-xxl-12 col-xl-12 col-lg-12 col-sm-12 col-md-12">
                <label for="categoriaOtro" class="form-label">Categoría</label>
                <input type="text" class="form-control" id="categoriaOtro${producto.id}" value="${producto.categoria}" required>
            </div>
            </div>                                                   
            <div class="row">
              <div class="mb-3 col-xxl-12 col-xl-12 col-lg-12 col-sm-12 col-md-12">
                <label for="nombreOtro" class="form-label">Descripción</label>
                <input type="text" class="form-control" id="descripcionOtro${producto.id}" value="${producto.descripcion}" required></textarea>
              </div>
            </div>                                                   
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="priceOtro" class="form-label">Precio</label>
                <input type="number" class="form-control" id="priceOtro${producto.id}" value="${producto.precio}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="codOtro" class="form-label">Código de Producto</label>
                <input type="text" class="form-control" id="codOtro${producto.id}" value="${producto.cod}" required>
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="image1Otro" class="form-label">Portada</label>
                <input type="text" class="form-control" id="image1Otro${producto.id}" value="${producto.portada}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="image2Otro" class="form-label">Imagen 2</label>
                <input type="text" class="form-control" id="image2Otro${producto.id}" value="${producto.img2}" required>
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                <label for="image3Otro" class="form-label">Imagen 3</label>
                <input type="text" class="form-control" id="image3Otro${producto.id}" value="${producto.img3}" required>
              </div>
              <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                  <label for="stockOtro" class="form-label">Unidades en existencia</label>
                  <input type="number" class="form-control" id="stockOtro${producto.id}" value="${producto.stock}" required>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn bgColor btn-outline-secondary colorFuente" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn bgColor btn-outline-secondary colorFuente" onclick="editarOtro(${producto.id})">Editar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  `
  }
}