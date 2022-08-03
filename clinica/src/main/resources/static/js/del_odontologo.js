window.addEventListener('load', function () {

    const formulario = document.querySelector('#odontologo_del');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();


        id = parseInt(document.querySelector('#id').value);
        const url = '/odontologos/'+ id;
        const settings = {
            method: 'DELETE'
        }

        fetch(url, settings)
            .then(data => {
                if(data.status === 200){
                     let successAlert = '<div class="alert alert-success alert-dismissible" role="alert">' +
                         '<strong>Odontologo Eliminado </strong>' +
                         '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                         '</div>'

                     document.querySelector('#response').innerHTML = successAlert;
                     document.querySelector('#response').style.display = "block";
                     resetUploadForm();
                }else{
                    let errorAlert = '<div class="alert alert-danger alert-dismissible" role="alert">' +
                    '<strong> Error al eliminar este odontólogo </strong>' +
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

    (function(){
        let pathname = window.location.pathname;
      if (pathname == "/odontologo-delete.html") {
          document.querySelector(".nav .nav-item a:last").addClass("active");
      }
          })
});