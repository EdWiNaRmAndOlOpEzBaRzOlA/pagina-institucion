
const resumen = document.getElementById("resumenRegistro");

const formulario = document.getElementById("formularioRegistro");
const mensaje = document.getElementById("mensajeFormulario");

formulario.addEventListener("submit", function(evento) {

    // Evitar que la página se recargue
    evento.preventDefault();

    // Obtener los datos del formulario
    const nombres = document.getElementById("nombres").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const servicio = document.getElementById("servicio").value;

    // Validar que los campos tengan información
    if (nombres === "" || correo === "" || telefono === "" || servicio === "") {
        mensaje.textContent = "Por favor, completa todos los campos.";
        mensaje.style.color = "red";
        resumen.hidden = true;
        return;
    }

    // Colocar los datos dentro del resumen
    document.getElementById("resumenNombres").textContent = nombres;
    document.getElementById("resumenCorreo").textContent = correo;
    document.getElementById("resumenTelefono").textContent = telefono;
    document.getElementById("resumenServicio").textContent = servicio;

    // Mostrar mensaje de confirmación
    mensaje.textContent = "¡Registro realizado correctamente, " + nombres + "! Nos comunicaremos contigo.";
    mensaje.style.color = "green";

    // Mostrar el resumen
    resumen.hidden = false;

    // Mostrar los datos en la consola
    console.log("Datos del registro:");
    console.log("Nombres:", nombres);
    console.log("Correo:", correo);
    console.log("Teléfono:", telefono);
    console.log("Servicio:", servicio);

    // Limpiar el formulario
    formulario.reset();
});




const botonConsultar = document.getElementById("botonConsultar");
const resultadoConsulta = document.getElementById("resultadoConsulta");

// Datos de ejemplo de los servicios académicos
const serviciosAcademicos = [
    "Cursos técnicos",
    "Capacitaciones",
    "Orientación académica"
];

// Simular una consulta GET


botonConsultar.addEventListener("click", function() {

    console.log("Simulación de solicitud GET");
    console.log("Servicios recibidos:", serviciosAcademicos);

    // Limpiar resultados anteriores
    resultadoConsulta.replaceChildren();

    // Crear un mensaje
    const titulo = document.createElement("h3");
    titulo.textContent = "Servicios disponibles";
    resultadoConsulta.appendChild(titulo);

    // Crear una lista de servicios
    const lista = document.createElement("ul");
    lista.className = "lista-servicios";

    serviciosAcademicos.forEach(function(servicio) {
        const elemento = document.createElement("li");
        elemento.textContent = servicio;
        lista.appendChild(elemento);
    });

    resultadoConsulta.appendChild(lista);

    // Mostrar confirmación
    const confirmacion = document.createElement("p");
    confirmacion.textContent = "Consulta realizada correctamente.";
    confirmacion.className = "mensaje-consulta";

    resultadoConsulta.appendChild(confirmacion);
});

