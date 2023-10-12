const express = require('express');
const {friendRequest} = require('../controllers/controllers.friendcontroller');
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/:friendID', friendRequest);
// define the about route

module.exports = router