import express from 'express';
import configViewEngine from './configs/viewEngine.js';
import 'dotenv/config.js';
const app = express();
const port = process.env.PORT || 8080;
// console.log(process.env.PORT);

configViewEngine(app);
app.get('/', (req, res) => {
    res.render('test/index.ejs');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})