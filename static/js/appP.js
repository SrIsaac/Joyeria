// document.addEventListener("DOMContentLoaded",mostrarProducto())
document.addEventListener("DOMContentLoaded", function () {

// --------------------------Sacar la informacion de las tarjetas------------------------------
    const listaCursos = document.querySelector(".Productoss")
    const btnborrar= document.querySelector("#product-list")
    
    listaCursos.addEventListener('click', agregarProducto,);

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

        const Idvalue= infoPrecio.id;       

        // let id=infoPrecio.find((element)=>element.id === infoPrecio.id)

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
        console.log(productos);
        productos.forEach((infoPrecio)=>agregarProductoCarrito(infoPrecio))
    }
    
    function agregarProductoCarrito(infoPrecio){
        const lista = document.querySelector("#product-list");
        console.log(lista);
        const fila=document.createElement('tr');
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
    
    function removerProducto(){
        
    }

    console.log();
    mostrarProducto();

    btnborrar.addEventListener('click',(e)=>{
        removerCarrito(e.target);
        // removerProducto(productoSeleccionado)
        // console.log(productoSeleccionado);
    })
});
