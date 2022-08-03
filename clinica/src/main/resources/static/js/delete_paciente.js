function deleteBy(id)
{
          //con fetch invocamos a la API de odontologo con el método DELETE
          //pasandole el id en la URL
          const url = '/pacientes/'+ id;
          const settings = {
              method: 'DELETE'
          }
          fetch(url,settings)
          .then(response => response.json())

          //borrar la fila del odontologo eliminado
          let row_id = "#tr_" + id;
          document.querySelector(row_id).remove();

}