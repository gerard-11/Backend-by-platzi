import { products } from './data.js'
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    const categories = [...new Set(products.map(p => p.categories))];
    res.json(categories);
});

router.get('/:category/products', (req, res) => {
   const { category } = req.params;
    console.log('categoria recibida:', category)
    console.log('categorias en productos:', products.map(p => p.categories))
    const filtered = products.filter(p => p.categories === category);

   if (filtered.length <= 0) {
       return res.status(404).json({message: 'categoria no encontrado'});
   }
   res.json(filtered);
});

export default router;
