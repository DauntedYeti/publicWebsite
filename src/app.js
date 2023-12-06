import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import path from 'path'
import { create } from 'express-handlebars'; // templating engine
import indexRouter from './routes/index.js';

config({ path: './config/config.env' }); //dotenv file
const PORT = process.env.PORT || 5555
const app = express();

//handlebars setup
const hbs = create({
    extname: '.hbs',
    defaultLayout: 'main',
    partialsDir: ['./src/views/partials',],
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
})
app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')
app.set('views', './src/views')


// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
};
app.use(express.static('./src/public'))// Serve Static Files
app.use('/', indexRouter)
// catch 404 and forward to error handler
app.use((_req, res) => {
    res.status(404).render('error/404', { layout: 'main', title: '404' })
})
app.listen(PORT), console.log(`Server running on ${process.env.NODE_ENV} on port ${PORT}`);