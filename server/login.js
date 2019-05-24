const fs = require('fs');
const path = require('path');

/**
 * Valida usuario y clave
 * 
 * @param {string} user Usuario
 * @param {string} password Clave
 */
function validarUsuario(user, password) {

  //Versió sincrónica: readFileSync. Solo recibe un parámetro (al ser sincrónica no se
  // le pasa un callback) y Retorna los datos (entonces ese retorno se lo asigna a una 
  //variable "data")
  let data = fs.readFileSync(path.join(__dirname,"usuarios.json"));

  //Al ser sincrónica, no va a llegar a esta línea hasta no haber hecho la lectura
  // del archivo y tener la info en "data". Entonces ahora puedo procesar eso.
  var usuariosok = JSON.parse(data);
  console.log(usuariosok)
  for (let i = 0; i < usuariosok.length; i++) {
    console.log("req body", user)
    console.log("req body", usuariosok[i].username)

    if (user== usuariosok[i].username && password == usuariosok[i].pass) {
      console.log("validado")
      return true;
     } else {
       console.log("no validado")
     
    }
}

// Le agrego el return false para que si no validó ninguno retorne false y no
// undefined (por mera prolijidad algorítmica, digamos)
return false;

}

module.exports.validarUsuario = validarUsuario;