import express from 'express';
import cityController from '../controllers/cite.js';
const router = express.Router();

router.post('/', (req, res) => {
    if (!req.body.name) {
        res.status(400).send("Name is Required!");
    } else {
        cityController.Create(req, res);
    }
});

router.get('/', cityController.Show);

router.get('/:id', (req, res) => {
    if (!req.params.id) {
        res.status(400).send("id is Required!");
    } else {
        cityController.Delete(req, res);
    }
});

router.put('/:id', (req, res) => {
    if (!req.params.id) {
        res.status(400).send("id is Required!");
    } else {
        cityController.Update(req, res);
    }
});

export default router;