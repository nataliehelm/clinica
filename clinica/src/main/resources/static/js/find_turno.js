window.addEventListener('load', function () {

    const formulario = document.querySelector('#turno_find');



    formulario.addEventListener('submit', function (event) {
       event.preventDefault();
        id = parseInt(document.querySelector('#id').value);

            const url = '/turnos/'+ id;
            const settings = {
                method: 'GET'
            }

            fetch(url, settings)

            .then(response => {
                                if(response.status !== 200){
                                throw new Error();
                               }
                               return response.json();
                                    })
            .then(data => {

                               document.querySelector('#div_turno_table').style.display = "block";
                               var table = document.getElementById("turnoTable");
                               var turnoRow =table.insertRow();
                               let tr_id = 'tr_' + data.id;
                               turnoRow.id = tr_id;



                               turnoRow.innerHTML = '<td class=\"td_id\">' + data.id + '</td>' +
                                                           '<td class=\"td_fecha\">' + data.fecha.substring(0,10) + '</td>' +
                                                          '<td class=\"td_nombre\">' + data.paciente.nombre.toUpperCase() + '</td>' +
                                                          '<td class=\"td_apellido\">' + data.paciente.apellido.toUpperCase() + '</td>'+
                                                          '<td class=\"td_matricula\">' + data.paciente.dni + '</td>' +
                                                          '<td class=\"td_matricula\">' + data.odontologo.nombre.toUpperCase() + '</td>' +
                                                          '<td class=\"td_matricula\">' + data.odontologo.apellido.toUpperCase() + '</td>' +
                                                          '<td class=\"td_matricula\">' + data.odontologo.matricula + '</td>'
                                                          ;


            })
            .catch (error =>{
            let errorAlert = '<div class="alert alert-danger alert-dismissible" role="alert">' +
                                                             '<strong> No existe un turno con ese ID </strong>' +
                                                             '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                                             ' </div>'
                                            document.querySelector('#response').innerHTML = errorAlert;
                                            document.querySelector('#response').style.display = "block";
                                             //setInterval("location.reload()",3000);

            }

            )

    });

    /*(function(){
      let pathname = window.location.pathname;
      if (pathname == "/paciente-find.html") {
          document.querySelector(".nav .nav-item a:last").addClass("active");
      }
    })*/
});