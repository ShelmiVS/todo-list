document.getElementById('formulario-tarea').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const descripcion = document.getElementById('descripcion').value;
    const tipo = document.getElementById('tipo').value;
    const prioridad = document.querySelector('input[name="prioridad"]:checked').value;
    
    if (nombre === '' || fecha === '') {
        alert('Debes llenar al menos el nombre y la fecha');
        return;
    }
    
    const nuevaTarea = document.createElement('div');
    
    nuevaTarea.innerHTML = `
        <h3>${nombre}</h3>
        <p><strong>Fecha:</strong> ${fecha}</p>
        <p><strong>Descripción:</strong> ${descripcion || 'No hay descripción'}</p>
        <p><strong>Tipo:</strong> ${tipo || 'No especificado'}</p>
        <p><strong>Prioridad:</strong> ${prioridad}</p>
        <hr>
    `;
    
    document.getElementById('tareas-container').appendChild(nuevaTarea);
    
    this.reset();
});
