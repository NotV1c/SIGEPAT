/** Controlador */

let vista = null;
let usuario = null;

window.onload = function () {
    vista = new Vista();
    usuario = new Usuario();
    vista.displayTemplate("temp-container", "containerGrandfather")
    mostrarInicio();
}

//** Plantillas */

function mostrarInicio() {
    vista.displayTemplate("temp-login", "container")
}

function ingresar() {
    // Leer formulario
    let data = vista.getForm("form-login");
    if (data.ok) {
        usuario.login(data, function(data){
            if(data.success) {
                let dataUsuario = data.data.ID;
                let rolUsuario = data.data.rol;
                usuario.setUsuario(dataUsuario);
                if(rolUsuario == "Personal Médico") {
                    vista.displayTemplate("temp-menu-personal", "container");
                }
                else if (rolUsuario == "Tutor Legal") {
                    vista.displayTemplate("temp-menu-busqueda", "container");
                }
                else{
                    vista.displayTemplate("temp-registro", "containerGrandfather");
                }                
            } else {
                let msg = data.message + " " + data.error.message;
                vista.mostrarMensaje(false, msg);
            }
        });
    } else {
        vista.mostrarMensaje(data.ok, data.msj);
    }
}

function mostrarRegistro() {
    vista.displayTemplate("temp-registro", "containerGrandfather");
    
    // Usar un pequeño retraso para asegurarse de que el DOM se ha actualizado
    setTimeout(() => {
        configurarAutoRedimensionTextareas();
        
        // Forzar un reajuste después de un breve momento
        setTimeout(configurarAutoRedimensionTextareas, 100);
    }, 0);
}

function mostrarBusqueda() {
    vista.displayTemplate("temp-menu-busqueda", "container")
}

function regresarMenu() {
    vista.displayTemplate("temp-menu-personal", "container")
}

function buscar() {
    let dat = vista.getForm("form-search")
    if (dat.ok) {
        vista.displayTemplate("temp-registro", "containerGrandfather")
    }
}

function regresarInicioRegistro() {
    vista.displayTemplate("temp-container", "containerGrandfather")
    vista.displayTemplate("temp-login", "container")
}