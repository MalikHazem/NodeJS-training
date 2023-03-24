import express from 'express';
import studentController from '../controllers/student.js';
const router = express.Router();

router.post('/', (req, res) => {
    if (!req.body.name) {
        res.status(400).send("Name is Required!");
    } else {
        studentController.create(req, res);
    }
});

router.get('/', studentController.findAll);

router.get('/:id', (req, res) => {
    if (!req.params.id) {
        res.status(400).send("id is Required!");
    } else {
        studentController.stdDelete(req, res);
    }
});

router.put('/:id', (req, res) => {
    if (!req.params.id) {
        res.status(400).send("id is Required!");
    } else {
        studentController.stdUpdate(req, res);
    }
});

app.post('/login', async (req, res) => {
    if (!req.body.id) {
        res.status(400).send("id is Required!");
    } else {
        studentController.stdUpdate(req, res);
    }
});

export default router;