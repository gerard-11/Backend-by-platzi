import  express from 'express';
import { products } from './data.js';
const router = express.Router();

router.get('/', (req, res) => {
    const limit = parseInt(req.query.size) || 50;
    res.json(products.slice(0, limit));
})

router.get('/:id', (req, res) => {
    const id  =Number(req.params.id)
    const productId=products.find(p=>p.id ===id)

    if (!productId) {
        return res.status(404).json({
            message: 'Producto no encontrado'
        });
    }
    res.json(productId);
})

router.post('/', (req, res) => {
    const body = req.body;
    res.json({
        message: 'Producto adicionado com exito',
        data: body,
    });
})

export default router;
