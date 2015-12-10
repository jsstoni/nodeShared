module.exports = function ( app, core ) {
  app.get('/', function(req, res) {
    res.render('index');
  });
}