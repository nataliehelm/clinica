window.addEventListener('load', function () {

    //Buscamos y obtenemos el formulario donde estan
    //los datos que el usuario pudo haber modificado del odontologo
    const formulario = document.querySelector('#update_paciente_form');

    formulario.addEventListener('submit', function (event) {
        let odontologoId = document.querySelector('#paciente_id').value;
        //creamos un JSON que tendrá los datos del odontologo
        //a diferencia del odontologo nuevo en este caso enviamos el id
        //para poder identificarlo y modificarlo para no cargarlo como nuevo
        const formData = {
            id: document.querySelector('#paciente_id').value,
            nombre: document.querySelector('#nombre').value,
                        apellido: document.querySelector('#apellido').value,
                        dni: document.querySelector('#dni').value,
                        fechaingreso: document.querySelector('#fechaingreso').value,
                        domicilio: {
                        calle: document.querySelector('#calle').value,
                        numero: document.querySelector('#numero').value,
                        localidad: document.querySelector('#localidad').value,
                        provincia: document.querySelector('#provincia').value,}

        };

        //invocamos utilizando la función fetch la API odontologos con el método PUT que modificará
        //el odontologo que enviaremos en formato JSON
        const url = '/pacientes';
        const settings = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        }
          fetch(url,settings)
          .then(response => response.json())

    })
 })

    //Es la funcion que se invoca cuando se hace click sobre el id de un odontologo del listado
    //se encarga de llenar el formulario con los datos del odontologo
    //que se desea modificar
    function findBy(id) {
          const url = '/pacientes'+"/"+id;
          const settings = {
              method: 'GET'
          }
          fetch(url,settings)
          .then(response => response.json())
          .then(data => {
              let paciente = data;
              document.querySelector('#paciente_id').value = paciente.id;
              document.querySelector('#nombre').value = paciente.nombre;
              document.querySelector('#apellido').value = paciente.apellido;
              document.querySelector('#dni').value = paciente.dni;
              document.querySelector('#fechaingreso').value = paciente.fechaIngreso.substring(0,10)
              document.querySelector('#calle').value = paciente.domicilio.calle;
              document.querySelector('#numero').value= paciente.domicilio.numero;
              document.querySelector('#localidad').value = paciente.domicilio.localidad;
              document.querySelector('#provincia').value = paciente.domicilio.provincia;



              //el formulario por default esta oculto y al editar se habilita
              document.querySelector('#div_paciente_updating').style.display = "block";
          }).catch(error => {
              alert("Error: " + error);
          })
      }