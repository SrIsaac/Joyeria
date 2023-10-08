document.addEventListener("DOMContentLoaded", function () {

    const ButtonEnviar=document.querySelector("#enviar");
    function formulario(nombre,numero,correo,mensaje){
            this.nombre=nombre;
            this.numero=numero;
            this.correo=correo;
            this.mensaje=mensaje;
                    
    }

// ------------Alertas de el formulario -----------------------
    function mostrarAlerta(mensaje,className) {

        const div=document.createElement('div');
        div.className=`alert alert-${className}`;
        div.style.fontSize="20px";
        div.appendChild(document.createTextNode(mensaje));

        const container=document.querySelector('#form');
        const formulari=document.querySelector('#form__group');
        container.insertBefore(div, formulari);

        setTimeout(()=>document.querySelector('.alert').remove(), 3000);
    }

    function limpiarCampos(){
        document.querySelector("#nombre").value='';
        document.querySelector("#numero").value='';
        document.querySelector("#correo").value='';
        document.querySelector("#mensaje").value='';
    }

// -----------Ingreso de datos al localstorage------------------

    function traerInfo(){

    }

    function agregarInfo(form){
        
    }

//----------evento----------------------
    ButtonEnviar.addEventListener('click',(e)=>{
        e.preventDefault();
        
        const inputNombre=document.querySelector("#nombre").value;
        const inputNumero=document.querySelector("#numero").value;
        const inputCorreo=document.querySelector("#correo").value;
        const inputMensaje=document.querySelector("#mensaje").value;
        
        if(inputNombre === '' || inputNumero === '' || inputCorreo === ''|| inputMensaje === ''){
            mostrarAlerta('Completar todos los campos','danger');
        }else{
            const form= new formulario(inputNombre,inputNumero,inputCorreo,inputMensaje,);
            console.log(form);
            agregarInfo(form);
            mostrarAlerta('Informacion enviada correctamente','success');
            limpiarCampos();
        }
    })

});