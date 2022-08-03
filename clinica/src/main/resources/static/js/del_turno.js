window.addEventListener('load', function () {

    const formulario = document.querySelector('#turno_del');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();


        id = parseInt(document.querySelector('#id').value);
        const url = '/turnos/'+ id;
        const settings = {
            method: 'DELETE'
        }

        fetch(url, settings)
            .then(data => {
                if(data.status === 200){
                     let successAlert = '<div class="alert alert-success alert-dismissible" role="alert">' +
                         '<strong>Turno Eliminado </strong>' +
                         '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                         '</div>'

                     document.querySelector('#response').innerHTML = successAlert;
                     document.querySelector('#response').style.display = "block";
                     resetUploadForm();
                }else{
                    let errorAlert = '<div class="alert alert-danger alert-dismissible" role="alert">' +
                    '<strong> Error al eliminar este turno </strong>' +
                                     '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                     ' </div>'

                      document.querySelector('#response').innerHTML = errorAlert;
                      document.querySelector('#response').style.display = "block";
                     resetUploadForm();
                }
            })
    });


    function resetUploadForm(){
        document.querySelector('#id').value = "";

    }

    /*(function(){
        let pathname = window.location.pathname;
      if (pathname == "/paciente-delete.html") {
          document.querySelector(".nav .nav-item a:last").addClass("active");
      }
          })*/
});