import { users } from './data.js'
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    const limit = parseInt(req.query.size) || 50
    res.json(users.slice(0,limit));
})

router.get('/:id', (req, res) => {
   const user= users.find(user=> user.id === req.params.id);

    if (!user) {
        return res.status(404).json({
            message: 'usuario no encontrado'
        });
    }
    res.json( user );
})

export default router;
