module.exports = (app) => {

    const productRouter = require('./Routes/productRoute');
    const searchRouter = require('./Routes/searchRoute');
    const addFavRouter = require('./Routes/addFavRoute');
    const getFavouritesRouter = require('./Routes/getFavourites');

    app.use('/products', productRouter);
    app.use('/search', searchRouter);
    app.use('/setfavourite', addFavRouter);
    app.use('/favourites', getFavouritesRouter);
};