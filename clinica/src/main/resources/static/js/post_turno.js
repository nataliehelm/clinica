window.addEventListener('load', function () {

    const formulario = document.querySelector('#add_new_turno');

    formulario.addEventListener('submit', function (event) {
    event.preventDefault();

        const formData = {
            paciente: {
                id: document.querySelector('#paciente_id').value,
            },
        odontologo: {
            id: document.querySelector('#odontologo_id').value,
            },
            fecha: document.querySelector('#fechaturno').value,
        };

        const url = '/turnos';
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        }

        fetch(url, settings)
            //.then(response => response.json())
            .then(data => {
                 if(data.status === 200){
                 let successAlert = '<div class="alert alert-success alert-dismissible">' +
                     '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                     '<strong></strong> Turno agregado correctamente </div>'

                 document.querySelector('#response').innerHTML = successAlert;
                 document.querySelector('#response').style.display = "block";
                 resetUploadForm();
            }else {

                    let errorAlert = '<div class="alert alert-danger alert-dismissible">' +
                                     '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                     '<strong> Error intente nuevamente</strong> </div>'

                      document.querySelector('#response').innerHTML = errorAlert;
                      document.querySelector('#response').style.display = "block";
                     resetUploadForm();
                    }
            })
        });


    function resetUploadForm(){
        document.querySelector('#paciente_id').value = "";
        document.querySelector('#odontologo_id').value = "";


    }

    /*(function(){
        let pathname = window.location.pathname;
        if(pathname === "/"){
            document.querySelector(".nav .nav-item a:first").addClass("active");
        } else if (pathname == "/paciente-list.html") {
            document.querySelector(".nav .nav-item a:last").addClass("active");
        }
    })();*/
});