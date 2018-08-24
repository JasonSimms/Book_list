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
