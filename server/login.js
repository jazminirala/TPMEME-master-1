const fs = require('fs');
const path = require('path');

/**
 * Valida usuario y clave
 * 
 * @param {string} user Usuario
 * @param {string} password Clave
 */
function validarUsuario(user, password) {

  fs.readFile(path.join(__dirname,"usuarios.json"), function(error, data){
    if(error == undefined)
    {
        var usuariosok = JSON.parse(data);
        
      for (let i = 0; i < usuariosok.length; i++) {
        console.log("req body", user)
        console.log("req body", usuariosok[i].username)

        if (user == usuariosok[i].username && password == usuariosok[i].pass) {
          console.log("validado")
          return true;
        } else {
          console.log("no validado")
        }
      }
    }
})

    
  
}

module.exports.validarUsuario = validarUsuario;