/* Obtenemos los campos del DOM */
const email = document .getElementById( 'email'),      
      asunto = document. getElementById( 'asunto' ),
      mensaje = document .getElementById( 'mensaje' ),
      btnEnviar = document .getElementById( 'enviar' );

escucharEventos();      
function escucharEventos() {
    document .addEventListener( 'DOMContentLoaded', inicioApp );     // 'DOMContentLoaded' ---> Este evento se disparará cuando el DOM haya cargado totalmente

    // Campos del formulario
    email .addEventListener( 'blur', validarCampo );
    asunto .addEventListener( 'blur', validarCampo );
    mensaje .addEventListener( 'blur', validarCampo );
}      

// Función que inicializa la aplicación
function inicioApp() {
    btnEnviar .disabled = true;     // Desactivar el botón de ENVIAR
}

// Función para validar que el campo no esté vacío
function validarCampo() {
    let errores;      

    // Valida la longitud del contenido del campo y que no se encuentre vacío
    validarLongitud( this );        // 'this' ---> hace referencia al campo actual

    errores = document .querySelectorAll( '.error' );      // Capturamos la cantidad de clases 'error' que existen después de validar las longitudes
    console .log( 'errores ', errores .length );
    // Valida que los campos no se encuentren vacíos
    if( email .value !== '' && asunto .value !== '' && mensaje .value !== '' ) {
        if( errores .length === 0 ) {
            btnEnviar .disabled = false;     // Habilitamos el botón Enviar
        }
    }
    else {
        btnEnviar .disabled = true;      // Deshabilitamos el botón Enviar    
    }
}

// Función que valida la longitud del campo.
function validarLongitud( campo ) {
    console .log( 'El campo es: ', campo .id, ' y tiene ', campo .value .length, ' caracteres' );

    if( campo .value .length > 0 ) {
        campo .style .borderBottomColor = 'green';
        campo .classList .remove( 'error' );            // Elimina una clase error al elemento
    }
    else {
        campo .style .borderBottomColor = 'red';
        campo .classList .add( 'error' );               // Agrega una clase error al elemento
    }
}