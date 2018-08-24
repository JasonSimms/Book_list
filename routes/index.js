const express = require('express');
const router  = express.Router();
const Book = require('../models/Book')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', {title: "BookList Project By JasonS"});
});

/* GET BOOK LIST */
router.get('/bookList', (req, res, next) => {
  Book.find({}).then(data => { 
    // console.log(data)
    res.render('bookList', {data, title: 'BookList by Jason'});
  })
});

/* GET BOOK INFO BY ID */
router.get('/bookId', (req, res, next) => {
  Book.findById(req.query.id).then(data => { 
    // console.log(data)
    res.render('bookId', {data, title: 'BookId by Jason'});
  })
});


// router.get('/newBook', (req, res, next) => {
//   Book.findById(req.query.id).then(data => { 
//     // console.log(data)
//     res.render('newBook', {data, title: 'Create a new Book by Jason'});
//   })
// });


router.post('/books/add', (req, res, next) => {
  const { name, author, description, rating } = req.body;
  const newBook = new Book({ name, author, description, rating})
  newBook.save()
  .then((book) => {
    res.redirect('/bookList')
  })
  .catch((error) => {
    console.log(error)
  })
});

router.get('/newBook', (req, res, next) => {
  res.render("newBook")
});


// router.post("/createBook", (req, res) => {
//   const bookEntry = new Book({
//     name: "Minou",
//     rating: "13",
//     author: "white",
//     description: "eating, sleeping , tree climbing"
//   });
//   //PROMISE CREATED FROM CAT DB-----------------------------------
//   bookEntry
//     .save()
//     .then(result => {
//       console.log(result);
//     })
//     .catch(console.error);
//   //response-----------------------------
// });

/* GET BOOK INFO BY ID */
// router.get('/book/:id', (req, res, next) => {
//   Book.findById(req.query.id).then(data => { 
//     // console.log(data)
//     res.render('bookId', {data, title: 'BookId by Jason'});
//   })
// });

router.get('/book/:id', (req, res, next) => {
  Book.findById(req.params.id)
      .then(data => {
          res.render('bookId', { data })
      })
      .catch(console.error)
})

module.exports = router;
