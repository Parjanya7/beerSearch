module.exports = {

    PORT: process.env.PORT || 9000,

    MiddleWare: ( app, express, bodyParser ) => {

        app.use( express.json() );
        app.use( bodyParser.urlencoded({ extended: true }) );
        app.use( bodyParser.json() );
    },

    ROUTES: (app) => {

        const routes = require('./routes');

        routes(app);
    }
};