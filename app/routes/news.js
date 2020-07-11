

module.exports = app => {


  app.get('/', (req, res) => {
    res.render('news/news');
  });

  app.post('/', (req, res) => {
    const { email, user, text } = req.body;
    console.log(email);
    console.log(text)
    res.render('news/news');
  });
};
