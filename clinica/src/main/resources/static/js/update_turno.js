window.addEventListener('load', function () {

    //Buscamos y obtenemos el formulario donde estan
    //los datos que el usuario pudo haber modificado del odontologo
    const formulario = document.querySelector('#update_turno_form');

    formulario.addEventListener('submit', function (event) {
        let turnoId = document.querySelector('#turno_id').value;
        //creamos un JSON que tendrá los datos del odontologo
        //a diferencia del odontologo nuevo en este caso enviamos el id
        //para poder identificarlo y modificarlo para no cargarlo como nuevo
        const formData = {
            id: document.querySelector('#turno_id').value,
            paciente: {
                            id: document.querySelector('#paciente_id').value,
                        },
                    odontologo: {
                        id: document.querySelector('#odontologo_id').value,
                        },
                        fecha: document.querySelector('#fecha').value,

        };

        //invocamos utilizando la función fetch la API odontologos con el método PUT que modificará
        //el odontologo que enviaremos en formato JSON
        const url = '/turnos';
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
          const url = '/turnos'+"/"+id;
          const settings = {
              method: 'GET'
          }
          fetch(url,settings)
          .then(response => response.json())
          .then(data => {
              let turno = data;
              document.querySelector('#turno_id').value = turno.id;
              document.querySelector('#paciente_id').value = turno.paciente.id;
              document.querySelector('#odontologo_id').value = turno.odontologo.id;
              document.querySelector('#fecha').value = turno.fecha.substring(0,10);




              //el formulario por default esta oculto y al editar se habilita
              document.querySelector('#div_turno_updating').style.display = "block";
          }).catch(error => {
              alert("Error: " + error);
          })
      }