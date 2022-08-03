window.addEventListener('load', function () {

    //con fetch invocamos a la API de odontologos con el método GET
    //nos devolverá un JSON con una colección de odontologos
    const url = '/turnos';
    const settings = {
        method: 'GET'
    }

    fetch(url, settings)
        .then(response => response.json())
        .then(data => {

            for (turno of data) {

                var table = document.getElementById("turnoTableBody");
                var turnoRow = table.insertRow();
                let tr_id = 'tr_' + turno.id;
                turnoRow.id = tr_id;

                let deleteButton = '<button' +
                    ' id=' + '\"' + 'btn_delete_' + turno.id + '\"' +
                    ' type="button" onclick="deleteBy(' + turno.id + ')" class="btn btn-danger btn_delete">' +
                    '&times' +
                    '</button>';

                let updateButton = '<button' +
                    ' id=' + '\"' + 'btn_id_' + turno.id + '\"' +
                    ' type="button" onclick="findBy(' + turno.id + ')" class="btn btn-info btn_id">' +
                    turno.id +
                    '</button>';

                //armamos cada columna de la fila
                //como primer columna pondremos el boton modificar
                //luego los datos del odontologo
                //como ultima columna el boton eliminar
                turnoRow.innerHTML = '<td>' + updateButton + '</td>' +
                                                            '<td class=\"td_id\">' + turno.id + '</td>' +
                                                           '<td class=\"td_fecha\">' + turno.fecha.substring(0,10) + '</td>' +
                                                          '<td class=\"td_nombre\">' + turno.paciente.nombre.toUpperCase() + '</td>' +
                                                          '<td class=\"td_apellido\">' + turno.paciente.apellido.toUpperCase() + '</td>'+
                                                          '<td class=\"td_matricula\">' + turno.paciente.dni + '</td>' +
                                                          '<td class=\"td_matricula\">' + turno.odontologo.nombre.toUpperCase() + '</td>' +
                                                          '<td class=\"td_matricula\">' + turno.odontologo.apellido.toUpperCase() + '</td>' +
                                                          '<td class=\"td_matricula\">' + turno.odontologo.matricula + '</td>'+
                    '<td>' + deleteButton + '</td>';

            };

        })
})