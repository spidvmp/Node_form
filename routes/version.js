'use strict';
var express=require('express');

var router=express.Router();

/*
he de leer el fichero package.josn para obtener los modulos que hay y las versiones, pero lo vamos a llevar a otro modulo,
 para que este sea mas sencillo. Hay que intentar que los modulos sena los mas sencillos posibles para que asi se puedan reutilizar
 Asi que genero el modulo leeVersionDeModulo que se le pasa el nombre de un modulo y devuelve la version. En caso de que no lo tenga pues devuelve un JSOn vacio
 */

//var leeVersionModulo = require('../lib/leeVersionDeModulo');

router.get('/', function(req,res){
    //recibimos la peticion de que queremos ller la dependencia

    console.log('esto es req:' , req);

    //esto devuelve a res que vista tiene que mostrar, en este caso version.ejs y no le pasa parametros
    res.render('version',null);


});


//en caso de que den a la pagina version/a se va por aqui
router.get('/a', function(req,res){
    console.log('han dado a version/a');
    res.render('version',null);
});


module.exports = router;