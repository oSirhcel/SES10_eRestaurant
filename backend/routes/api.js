const express = require ('express');
const router = express.Router();

router.get('/aye', (req, res, next) => {
    res.send('chocolate');
});

router.get('/register', (req, res, next) => {

});

router.get('/dashboard/:id', (req, res, next) => {

})

module.exports = router;