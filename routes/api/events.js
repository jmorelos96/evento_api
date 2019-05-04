var router          = require('express').Router();
var connection      = require('../../config/database.js');


// se obtienen todos los eventos
router.get('/all',function(req,res,next){
    connection.connect(function(err) {
          connection.query('SELECT * FROM qicp63by0dzsdlr3.evento order by created_at desc', 
          function(err, results) {
            if (err){
                console.log(err);
                res.status(500);
            } 
              obj = results; 
              res.type('application/json');
              res.send(obj); 
          })
    });
    console.log('*** obtiene todos los recientes eventos creados');
});




// se obtienen una lista de eventos por categoria
router.get('/category',function(req,res,next){
    connection.connect(function(err) {
          connection.query('SELECT * FROM qicp63by0dzsdlr3.evento  order by evento.categoria desc ', 
          function(err, results) {
            if (err){
                console.log(err);
                res.status(500);
            }
              obj = results; 
              res.type('application/json');
              res.send(obj);  
          })
        })
    console.log('*** obtiene todos los recientes eventos creados por categoria');
});




// evento por id
router.get('/id/:id',function(req,res,next){
    connection.connect(function(err) {
        connection.query('SELECT * FROM qicp63by0dzsdlr3.evento WHERE evento.id = ? ',req.params.id, 
        function(err, results) {
          if (err) console.log(err);
            obj = results; 
            res.type('application/json');
            res.send(obj[0]);  
        })
  });
    console.log('*** evento por id');
});




// se crea un evento
router.post('/create', function(req, res, next) {
    var data = req.body;
    var query = connection.query('insert into qicp63by0dzsdlr3.evento set ?', data, 
        function(err, result) {
            if (err) {
                console.error(err);
                res.status(500);
                return res.send(err);
            } else {
                console.log('*** se ha creado un evento');
                return res.send('Ok');
            }
        }
    );
});





// edicion un evento
router.put('/update',function(req,res,next){
    var data = req.body;
    var queryStr = "update qicp63by0dzsdlr3.evento set nombre=   '"+req.body.nombre+"',  direccion= '"+req.body.direccion+"' , "+
    " modalidad='"+req.body.modalidad+"', categoria='"+req.body.categoria+"'  where evento.id = "+req.body.id+"  " ;

    var query = connection.query(queryStr, data, function(err, result) {
        if (err) {
            console.error(err);
            res.status(500);
            return res.send(err);
        } else {
            console.log('*** se ha actualizado un evento');
            return res.send('Ok');
        }
    });
});




// eliminacion de evento
router.delete('/delete',function(req,res,next){
    var query = connection.query('delete from qicp63by0dzsdlr3.evento where evento.id = ? ', req.body.id , function(err, result) {
        if (err) {
            console.error(err);
            res.status(500);
            return res.send(err);
        } else {
            console.log('*** se ha eliminado un evento');
            return res.send('Ok');
            res.status(200);
        }
    });
});



module.exports = router;