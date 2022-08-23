import express from 'express';
import configViewEngine from './configs/viewEngine.js';
import 'dotenv/config.js';
import initWebRoute from './route/web.js';
const app = express();
const port = process.env.PORT || 8080;
// console.log(process.env.PORT);

configViewEngine(app);
initWebRoute(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})