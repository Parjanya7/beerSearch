const express = require('express');

const router = express.Router();

router.get('/', ( req, res ) => {

    // Responsing product list 
    let products = [ // Dummy products. Or we can take these products from database.
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
        },
        {
            id: 4,
            name: 'Pilsen Larger',
            description: 'description about Pilsen Larger'
        },
        {
            id: 5,
            name: 'Avery Brown Dredge',
            description: 'description about this.'
        },
        {
            id: 6,
            name: 'Electric India',
            description: 'description about Electric India.'
        }
    ];

    res.json(products);
});

module.exports = router;