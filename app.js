// Esperar a que el formulario se envíe
document.getElementById('formulario-tarea').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar que se recargue la página
    
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const descripcion = document.getElementById('descripcion').value;
    const tipo = document.getElementById('tipo').value;
    const prioridad = document.querySelector('input[name="prioridad"]:checked').value;
    
    // Validar los campos obligatorios
    if (nombre === '' || fecha === '') {
        alert('Debes llenar al menos el nombre y la fecha');
        return;
    }
    
    // Crear un nuevo elemento para la tarea
    const nuevaTarea = document.createElement('div');
    
    // Agregar el contenido de la tarea
    nuevaTarea.innerHTML = `
        <h3>${nombre}</h3>
        <p><strong>Fecha:</strong> ${fecha}</p>
        <p><strong>Descripción:</strong> ${descripcion || 'No hay descripción'}</p>
        <p><strong>Tipo:</strong> ${tipo || 'No especificado'}</p>
        <p><strong>Prioridad:</strong> ${prioridad}</p>
        <hr>
    `;
    
    // Agregar la tarea a la lista
    document.getElementById('tareas-container').appendChild(nuevaTarea);
    
    // Limpiar el formulario
    this.reset();
});
