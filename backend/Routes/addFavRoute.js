const express = require('express');

const router = express.Router();

router.post('/', ( req, res ) => {

    res.json({ msg: `Favourited with ID: ${req.body.product_id}` });    
});

module.exports = router;