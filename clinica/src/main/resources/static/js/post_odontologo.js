window.addEventListener('load', function () {

    const formulario = document.querySelector('#add_new_odontologo');

    formulario.addEventListener('submit', function (event) {
    event.preventDefault();

        const formData = {
            nombre: document.querySelector('#nombre').value,
            apellido: document.querySelector('#apellido').value,
            matricula: document.querySelector('#matricula').value,
        };

        const url = '/odontologos';
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
                     '<strong></strong> Odontologo agregado </div>'

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
        document.querySelector('#nombre').value = "";
        document.querySelector('#apellido').value = "";
         document.querySelector('#matricula').value = "";

    }

    (function(){
        let pathname = window.location.pathname;
        if(pathname === "/"){
            document.querySelector(".nav .nav-item a:first").addClass("active");
        } else if (pathname == "/odontologo-list.html") {
            document.querySelector(".nav .nav-item a:last").addClass("active");
        }
    })();
});