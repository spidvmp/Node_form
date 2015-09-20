'use strict';

//se pasa un nombre de modulo para que lo localice y que devuelva la version. Si no lo encuentra deberia devolver null o algo asi

var fs=require('fs');

function leeVersionDeModulo ( nombreModulo, callBack) {

    console.log('he de buscar ' + nombreModulo);

    //leo el fichero
    fs.readFile( __dirname + '/../package.json', function(err,data){
        //compruebo si ha habido error
        if ( err ){
            return callBack(err);
        }

        //no hay error en l lectura, comprobamosla posibilidad de error al tratar el contenido
        try{
            var packJSON = JSON.parse(data);
        } catch (e) {
            //Hay error al tratar el contenido
            return callBack(e);
        }

        //tengo los datos en packJSON, he de buscar si tengo el modulo ha buscar

        console.log("buscar en " , packJSON);
        var arr=[nombreModulo];
        //primer parametro es null xq no ha habido error
        return callBack(null, arr);
    });





}


module.exports = leeVersionDeModulo;
