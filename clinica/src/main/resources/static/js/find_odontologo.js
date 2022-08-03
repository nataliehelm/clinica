window.addEventListener('load', function () {

    const formulario = document.querySelector('#odontologo_find');



    formulario.addEventListener('submit', function (event) {
       event.preventDefault();
        id = parseInt(document.querySelector('#id').value);

            const url = '/odontologos/'+ id;
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

                               document.querySelector('#div_odontologo_table').style.display = "block";
                               var table = document.getElementById("odontologoTable");
                               var odontologoRow =table.insertRow();
                               let tr_id = 'tr_' + data.id;
                               odontologoRow.id = tr_id;

                               odontologoRow.innerHTML = '<td class=\"td_id\">' + data.id + '</td>' +
                                                          '<td class=\"td_nombre\">' + data.nombre.toUpperCase() + '</td>' +
                                                          '<td class=\"td_apellido\">' + data.apellido.toUpperCase() + '</td>'+
                                                          '<td class=\"td_matricula\">' + data.matricula + '</td>';


            })
            .catch (error =>{
            let errorAlert = '<div class="alert alert-danger alert-dismissible" role="alert">' +
                                                             '<strong> No existe un odontólogo con ese ID </strong>' +
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
      if (pathname == "/odontologo-find.html") {
          document.querySelector(".nav .nav-item a:last").addClass("active");
      }
    })
});