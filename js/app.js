/* Obtenemos los campos del DOM */
const email = document .getElementById( 'email'),      
      asunto = document. getElementById( 'asunto' ),
      mensaje = document .getElementById( 'mensaje' ),
      btnEnviar = document .getElementById( 'enviar' ),
      btnReset = document .getElementById( 'resetBtn' ),
      formulario = document .getElementById( 'enviar-mail' );

escucharEventos();      
function escucharEventos() {
    document .addEventListener( 'DOMContentLoaded', inicioApp );     // 'DOMContentLoaded' ---> Este evento se disparará cuando el DOM haya cargado totalmente

    // Campos del formulario
    email .addEventListener( 'blur', validarCampo );
    asunto .addEventListener( 'blur', validarCampo );
    mensaje .addEventListener( 'blur', validarCampo );

    // Botón Enviar
    btnEnviar .addEventListener( 'click', enviarEmail );

    // Botón Reset
    btnReset .addEventListener( 'click', resetFormulario );
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

    // Validar unicamente campo email
    if( this .type === 'email' ) {
        validarEmail( this );
    }

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

// Función que valida el correo electrónico en el campo 'email'
function validarEmail( campo ) {
    const mensaje = campo .value;

    // Valida que la cadena de texto del campo 'email' tenga una @
    if( mensaje .indexOf( '@' ) !== -1 ) {            // Encontro el @
        campo .style .borderBottomColor = 'green';
        campo .classList .remove( 'error' );            // Elimina una clase error al elemento
    }
    else {      // No encontro el @
        campo .style .borderBottomColor = 'red';
        campo .classList .add( 'error' );               // Agrega una clase error al elemento
    }
}

// Función para enviar email
function enviarEmail( e ) {
    e .preventDefault();         // Previene la ejecución del 'action' del Formulario

    // Muestra Spinner al presionar Enviar
    const spinner = document .querySelector( '#spinner' );
    spinner .style .display = 'block';                      // Despliega el elemento en el DOM (Esta creado en el DOM y oculto desde el CSS desde el inicio)

    // Animación que verifica el envio del email
    const enviado = document .createElement( 'img' );       // Crea elemento 'img'
    enviado .src = 'img/mail.gif';                          // Agrega el path de la imagen que se desea desplegar en el elemento
    enviado .style .display = 'block';                      // Despliega el elemento en el DOM

    // Oculta Spinner a los 3 segundos
    setTimeout( function() {
        spinner .style .display = 'none';                   // Oculta el elemento en el DOM

        // Agrega al DOM la animación que verifica el envio del email usando a un elemento padre para insertarlo 'loaders'
        document .querySelector( '#loaders' ) .appendChild( enviado );

        // Oculta la Animación de verificación de envio pasados 5 segundos
        setTimeout( function() {
            enviado .style .display = 'none';               // Oculta el elemento en el DOM
            formulario .reset();                            // Resetea los campos del formulario
        }, 5000 );      // 5s (1000 = 1s)
    }, 3000 );      // 3s (1000 = 1s)

    console .log( 'Correo enviado' );
}

// Function que limpia todos los campos del formulario
function resetFormulario( e ) {
    e .preventDefault();         // Previene la ejecución del 'action' del Formulario

    formulario .reset();         // Resetea los campos del formulario
}