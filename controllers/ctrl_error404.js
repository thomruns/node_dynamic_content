const error404 = (req, res, next) => {
  res.status(404).render('v_error404', { pageTitle: '404 - Page Not Found' });
};

module.exports = error404;