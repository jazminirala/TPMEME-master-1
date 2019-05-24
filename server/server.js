//paquetes necesarios para el proyecto//

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const expressSession = require('express-session');

// JS propios
const login = require('./login');

// Manejo de sesión en Express con opciones basatante default, que no interesa
// ahora profundizar, que definen el comportamiento ante ciertas ocasiones, más
// bien orientadas a cuestiones de seguridad.
app.use(expressSession({
  secret: 'agua sin gas',
  resave: false,
  saveUninitialized: false
}))


// Middleware de body-parser para json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// creando ruta raíz //

//define que la CARPETA public tenga sus recursos estáticos, como css, imágenes etc//
app.use(express.static(path.join(__dirname, "../public")));

app.get("/login", function (req, res){
    console.log("Entrega mi ruta raíz");
    //entrega el html//
    res.sendFile(path.join(__dirname, "../public/login.html"));

})

app.get("/home", function (req, res){
  console.log("Entrega mi ruta raíz");
  //entrega el html//
  res.sendFile(path.join(__dirname, "../public/index.html"));

})

// Rutas de mi JSON para MEMESS. colocamos nuestra dependencia nueva fs. //

app.get("/infoMemes", function (req, res){
    fs.readFile(path.join(__dirname,"infomemes.json"), function(error, data){
        if(error == undefined)
        {
            var memesOk = JSON.parse(data);
            res.send(memesOk);
        }
    })
})



// POST /login
app.post('/login', (req, res) => {
// el siguiente if traerá lo que escribamos en Usuario. req.body.user me trae un objeto entero en este caso user y pass
  if (req.body.user !== undefined && req.body.password !== undefined) {

    if (login.validarUsuario(req.body.user, req.body.password)) {
      // Si validó bien, guardo la sesión y voy al home
      req.session.userId = req.body.user;

      console.log("VALIDADO")
      res.redirect('/home');
    } else {
      // Si validó mal, destruyo la sesión (por si la hubiera) y recargo página inicial
      console.log("NO VALIDADO")
      req.session.destroy();
      res.redirect('/login');
    }

  
    
  }
});



//indica en qué puerto estamos trabajando//
app.listen(8000, function(){
    console.log("Escuchando puerto 8000");
})


