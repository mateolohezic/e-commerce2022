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
          <td>${producto.cod}<img src="${producto.portada}" width="0" height="0" onload= "imprimirFavorito(${producto.id}); imprimirPublicado(${producto.id});"></td>
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
                <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#editarProcesador${producto.id}" onclick="modalEditar(${producto.id})"><i class="bi bi-pencil-fill"></i></button>
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
      <div id="modalEditar${producto.id}"></div>
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
        <td>${producto.cod}<img src="${producto.portada}" width="0" height="0" onload= "imprimirFavorito(${producto.id}); imprimirPublicado(${producto.id});"></td>
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
            <button type="button" class="btn btn-secondary"  data-bs-toggle="modal" data-bs-target="#editarProcesador" onclick="modalEditar(${producto.id})"><i class="bi bi-pencil-fill"></i></button>
            </div>
            <div>
            <button type="button" class="btn btn-secondary"  onclick="eliminarProducto(${producto.id})"><i class="bi bi-trash"></i></button>
            </div>
        </div>
        </td>
    </tr>
    <div id="modalEditar${producto.id}"></div>
    `)).join('')  
    tabla.innerHTML = filas
}

const modalEditar = async (id) =>{
  const productos = await fetch(`http://localhost:3000/productos/${id}`);
  const producto = await productos.json();
  const modal = document.getElementById(`modalEditar${id}`)

  if (producto.categoria == "Procesador") {
    modal.innerHTML = (`
    <section>
          <div class="modal fade text-start" id="editarProcesador${producto.id}" tabindex="-1" aria-labelledby="editarProcesadorLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header bgColor">
                  <h1 class="modal-title fs-5 colorFuente" id="editarProcesadorLabel">Editar Procesador</h1>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body bgColor colorFuente">
                  <form>
                    <div class="row">
                      <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                        <label for="nombreProcesador" class="form-label">Nombre del Producto</label>
                        <input type="text" class="form-control" id="nombreProcesador" value="" required>
                      </div>
                      <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                        <label for="marcaProcesador" class="form-label">Marca</label>
                        <input type="text" class="form-control" id="marcaProcesador" value="" required>
                     </div>
                    </div>
                    <div class="row">
                      <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                        <label for="socketProcesador" class="form-label">Socket</label>
                        <input type="text" class="form-control" id="socketProcesador" value="" required>
                      </div>
                      <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                        <label for="familiaProcesador" class="form-label">Familia</label>
                        <input type="text" class="form-control" id="familiaProcesador" value="" required>
                      </div>
                    </div>                                       
                    <div class="row">
                      <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                          <label for="modeloProcesador" class="form-label">Modelo</label>
                          <input type="text" class="form-control" id="modeloProcesador" value="" required>
                      </div>
                      <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                        <label for="nucleosProcesador" class="form-label">Núcleos</label>
                        <input type="number" class="form-control" id="nucleosProcesador" value="" required>
                      </div>
                    </div>                                       
                    <div class="row">
                      <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                        <label for="ramProcesador" class="form-label">RAM Soportada</label>
                        <input type="text" class="form-control" id="ramProcesador" value="" required>
                      </div>
                      <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                          <label for="fechaProcesador" class="form-label">Fecha de Lanzamiento</label>
                          <input type="text" class="form-control" id="fechaProcesador" value="" required>
                      </div>
                    </div>                                       
                    <div class="row">
                      <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                        <label for="gpuProcesador" class="form-label">GPU integrada</label>
                        <input type="text" class="form-control" id="gpuProcesador" value="" required>
                      </div>
                      <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                        <label for="frecuenciaMaxProcesador" class="form-label">Frecuencia Maxima</label>
                        <input type="number" class="form-control" id="frecuenciaMaxProcesador" value="" step="any" required>
                      </div>
                    </div>                                       
                    <div class="row">
                      <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                        <label for="priceProcesador" class="form-label">Precio</label>
                        <input type="number" class="form-control" id="priceProcesador" step="any" value="" required>
                      </div>
                      <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                        <label for="codProcesador" class="form-label">Código de Producto</label>
                        <input type="text" class="form-control" id="codProcesador" value="" required>
                      </div>
                    </div>
                    <div class="row">
                      <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                        <label for="image1Procesador" class="form-label">Portada</label>
                        <input type="text" class="form-control" id="image1Procesador" value="" required>
                      </div>
                      <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                        <label for="image2Procesador" class="form-label">Imagen 2</label>
                        <input type="text" class="form-control" id="image2Procesador" value="" required>
                      </div>
                    </div>
                    <div class="row">
                      <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                        <label for="image3Procesador" class="form-label">Imagen 3</label>
                        <input type="text" class="form-control" id="image3Procesador" value="" required>
                      </div>
                      <div class="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                          <label for="stockProcesador" class="form-label">Unidades en existencia</label>
                          <input type="number" class="form-control" id="stockProcesador" value="" required>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn bgColor btn-outline-secondary colorFuente" data-bs-toggle="modal" data-bs-target="#agregarProductoModal">Volver</button>
                      <button type="button" class="btn bgColor btn-outline-secondary colorFuente" onclick="añadirProcesador()">Añadir</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
    `)}
}