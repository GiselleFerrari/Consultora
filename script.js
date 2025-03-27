const formularioContacto = document.getElementById('formulario-contacto');

formularioContacto.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, usando fetch()
    console.log(`Nombre: ${nombre}, Email: ${email}, Mensaje: ${mensaje}`);

    // Limpia el formulario
    formularioContacto.reset();
});