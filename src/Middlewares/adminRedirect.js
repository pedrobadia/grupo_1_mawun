

module.exports = function adminRedirect(req, res, next) {
  
    if(req.session.usuarioLogeado == undefined) {

      return res.redirect ('/usuarios/inicio');
  
    }
    else {
  
      next()

    }
}