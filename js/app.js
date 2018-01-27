/* Obtenemos los campos del DOM */
const email = document .getElementById( 'email '),      
      asunto = document. getElementById( 'asunto' ),
      mensaje = document .getElementById( 'mensaje' ),
      btnEnviar = document .getElementById( 'enviar' );

escucharEventos();      
function escucharEventos() {
    document .addEventListener( 'DOMContentLoaded', inicioApp );     // 'DOMContentLoaded' ---> Este evento se disparará cuando el DOM haya cargado totalmente
}      

// Función que inicializa la aplicación
function inicioApp() {
    btnEnviar .disabled = true;     // Desactivar el botón de ENVIAR
}