import express from "express";
import categoriesRouter from "./v1/categoriesRouter.js";
import productsRouter from './v1/productsRouter.js';
import usersRouter from './v1/usersRouter.js';

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/users', usersRouter);
    router.use('/products', productsRouter);
    router.use('/categories', categoriesRouter);
}
export default routerApi;

