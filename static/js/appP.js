
// --------------------------Sacar la informacion de las tarjetas------------------------------
    const listaCursos = document.querySelector(".Productoss")
    const btnborrar= document.querySelector("#product-list")
    
    listaCursos.addEventListener('click', agregarProducto);
    

    function agregarProducto(e){
        e.preventDefault();
        if(e.target.classList.contains('boton')){
            const productoSeleccionado = e.target.parentElement.parentElement.parentElement;
            leerProducto(productoSeleccionado)
        }
    }

    function leerProducto(Producto){
        const precio= Producto.querySelector("p").textContent;
        const infoPrecio = {
            img: Producto.querySelector("img").src,
            nombre: Producto.querySelector("h4").textContent,
            precio: precio.slice(1),
            id: Producto.querySelector("button").getAttribute("data-id"),
            cantidad:1
        }       
        agregarInfo(infoPrecio);   
    }

// -----------Ingreso de datos al localstorage------------------

    function traerInfo(){
        let info;
        if(localStorage.getItem('datoProducto') === null){
            info=[];
        }else{
            info=JSON.parse(localStorage.getItem('datoProducto'));
        }
        return info;
    }

    function agregarInfo(product){
        const Informacion = traerInfo();
        Informacion.push(product);
        localStorage.setItem('datoProducto',JSON.stringify(Informacion) )
    }

    // -----------Llamar del localstorage------------------
    
    function mostrarProducto(){
        const productos= traerInfo();
        productos.forEach((infoPrecio)=>agregarProductoCarrito(infoPrecio))
        const elementos = document.querySelectorAll("#product-list > tr .delete")
        for(let i=0; i<elementos.length; i++){
            elementos[i].addEventListener('click',(e)=>{
                const pruebaID= e.target.parentElement.parentElement.id
                console.log(pruebaID);
                const prueba = productos.filter((producto)=>producto.id != pruebaID);
                console.log(prueba);
                localStorage.setItem('datoProducto', JSON.stringify(prueba));
                window.location.reload();
            })
            
        }
    }
    
    function agregarProductoCarrito(infoPrecio){
        const lista = document.querySelector("#product-list");
        console.log(lista);
        const fila=document.createElement('tr');
        fila.id=infoPrecio.id;
        fila.innerHTML=`
        <td><img width="100" src="${infoPrecio.img}"></td>
        <td style="font-size: 1.3rem;">${infoPrecio.nombre}</td>
        <td style="font-size: 1.3rem;">${infoPrecio.precio}</td>
        <td style="font-size: 1.3rem;">${infoPrecio.cantidad}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        
    
        lista.appendChild(fila);
    }

    function removerCarrito(x){
        if(x.classList.contains('delete')){
            x.parentElement.parentElement.remove()
        }
    }

    btnborrar.addEventListener('click',(e)=>{
        removerCarrito(e.target);
    })

    mostrarProducto();




