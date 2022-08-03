window.addEventListener('load', function () {
    (function(){

      //con fetch invocamos a la API de odontologos con el método GET
      //nos devolverá un JSON con una colección de odontologos
      const url = '/odontologos';
      const settings = {
        method: 'GET'
      }

      fetch(url,settings)
      .then(response => response.json())
      .then(data => {
         //recorremos la colección de odontologos del JSON
         for(odontologo of data){
            //por cada odontologo armaremos una fila de la tabla
            //cada fila tendrá un id que luego nos permitirá borrar la fila si eliminamos el odontologo
            var table = document.getElementById("odontologoTable");
            var odontologoRow =table.insertRow();
            let tr_id = 'tr_' + odontologo.id;
            odontologoRow.id = tr_id;

             let deleteButton = '<button' +
                 ' id=' + '\"' + 'btn_delete_' + odontologo.id + '\"' +
                 ' type="button" onclick="deleteBy('+odontologo.id+')" class="btn btn-danger btn_delete">' +
                 '&times' +
                 '</button>';

             let updateButton = '<button' +
                 ' id=' + '\"' + 'btn_id_' + odontologo.id + '\"' +
                 ' type="button" onclick="findBy('+odontologo.id+')" class="btn btn-info btn_id">' +
                 odontologo.id +
                 '</button>';

            //armamos cada columna de la fila
            //como primer columna pondremos el boton modificar
            //luego los datos del odontologo
            //como ultima columna el boton eliminar
            odontologoRow.innerHTML = '<td>' + updateButton + '</td>'+
                    '<td class=\"td_id\">' + odontologo.id + '</td>' +
                    '<td class=\"td_nombre\">' + odontologo.nombre.toUpperCase() + '</td>' +
                    '<td class=\"td_apellido\">' + odontologo.apellido.toUpperCase() + '</td>'+
                    '<td class=\"td_matricula\">' + odontologo.matricula + '</td>'+
                '<td>' + deleteButton + '</td>';

        };

    })
    })

    (function(){
      let pathname = window.location.pathname;
      if (pathname == "/odontologo-list.html") {
          document.querySelector(".nav .nav-item a:last").addClass("active");
      }
    })


    })