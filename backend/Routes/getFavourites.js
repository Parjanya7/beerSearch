const express = require('express');

const router = express.Router();

router.get('/', ( req, res ) => {

    let products = [ // Dummy favoutie products. Or we can take these products from database.
        {
            id: 1,
            name: 'Buzz',
            description: 'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.'
        },
        {
            id: 2,
            name: 'Trashy Blonde',
            description: 'description about Trash Blonde.'
        },
        {
            id: 3,
            name: 'Berliner Weisse with Yuzu - B-sides',
            description: 'description about Berliner.'
        }
    ]

    console.log('sdhf');
    res.json(products);
});

module.exports = router;    