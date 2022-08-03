window.addEventListener('load', function () {

    const formulario = document.querySelector('#paciente_find');



    formulario.addEventListener('submit', function (event) {
       event.preventDefault();
        id = parseInt(document.querySelector('#id').value);

            const url = '/pacientes/'+ id;
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

                               document.querySelector('#div_paciente_table').style.display = "block";
                               var table = document.getElementById("pacienteTable");
                               var pacienteRow =table.insertRow();
                               let tr_id = 'tr_' + data.id;
                               pacienteRow.id = tr_id;
                               let date_turno= new Date(data.fechaIngreso);


                               pacienteRow.innerHTML = '<td class=\"td_id\">' + data.id + '</td>' +
                                                          '<td class=\"td_nombre\">' + data.nombre.toUpperCase() + '</td>' +
                                                          '<td class=\"td_apellido\">' + data.apellido.toUpperCase() + '</td>'+
                                                          '<td class=\"td_matricula\">' + data.dni + '</td>' +
                                                          '<td class=\"td_matricula\">' + date_turno.toISOString().split('T')[0] + " " + date_turno.toISOString().split('T')[1].slice(0, 5) + '</td>' +
                                                          '<td class=\"td_matricula\">' + data.domicilio.calle + '</td>' +
                                                          '<td class=\"td_matricula\">' + data.domicilio.numero + '</td>' +
                                                          '<td class=\"td_matricula\">' + data.domicilio.localidad + '</td>' +
                                                          '<td class=\"td_matricula\">' + data.domicilio.provincia + '</td>'
                                                          ;


            })
            .catch (error =>{
            let errorAlert = '<div class="alert alert-danger alert-dismissible" role="alert">' +
                                                             '<strong> No existe un paciente con ese ID </strong>' +
                                                             '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                                             ' </div>'
                                            document.querySelector('#response').innerHTML = errorAlert;
                                            document.querySelector('#response').style.display = "block";
                                             setInterval("location.reload()",3000);

            }

            )

    });

    (function(){
      let pathname = window.location.pathname;
      if (pathname == "/paciente-find.html") {
          document.querySelector(".nav .nav-item a:last").addClass("active");
      }
    })
});