window.addEventListener('load', function () {

    //con fetch invocamos a la API de odontologos con el método GET
    //nos devolverá un JSON con una colección de odontologos
    const url = '/pacientes';
    const settings = {
        method: 'GET'
    }

    fetch(url, settings)
        .then(response => response.json())
        .then(data => {

            for (paciente of data) {

                var table = document.getElementById("pacienteTableBody");
                var pacienteRow = table.insertRow();
                let tr_id = 'tr_' + paciente.id;
                pacienteRow.id = tr_id;
                let date_turno = new Date(paciente.fechaIngreso);
                console.log(paciente);

                let deleteButton = '<button' +
                    ' id=' + '\"' + 'btn_delete_' + paciente.id + '\"' +
                    ' type="button" onclick="deleteBy(' + paciente.id + ')" class="btn btn-danger btn_delete">' +
                    '&times' +
                    '</button>';

                let updateButton = '<button' +
                    ' id=' + '\"' + 'btn_id_' + paciente.id + '\"' +
                    ' type="button" onclick="findBy(' + paciente.id + ')" class="btn btn-info btn_id">' +
                    paciente.id +
                    '</button>';

                //armamos cada columna de la fila
                //como primer columna pondremos el boton modificar
                //luego los datos del odontologo
                //como ultima columna el boton eliminar
                pacienteRow.innerHTML = '<td>' + updateButton + '</td>' +
                    '<td class=\"td_id\">' + paciente.id + '</td>' +
                    '<td class=\"td_nombre\">' + paciente.nombre.toUpperCase() + '</td>' +
                    '<td class=\"td_apellido\">' + paciente.apellido.toUpperCase() + '</td>' +
                    '<td class=\"td_dni\">' + paciente.dni + '</td>' +
                    '<td class=\"td_fechaingreso\">' + date_turno.toISOString().split('T')[0] + " " + date_turno.toISOString().split('T')[1].slice(0, 5) + '</td>' +
                    '<td class=\"td_calle\">' + paciente.domicilio.calle + '</td>' +
                    '<td class=\"td_numero\">' + paciente.domicilio.numero + '</td>' +
                    '<td class=\"td_localidad\">' + paciente.domicilio.localidad + '</td>' +
                    '<td class=\"td_provincia\">' + paciente.domicilio.provincia + '</td>'+
                    '<td>' + deleteButton + '</td>';

            };

        })
})