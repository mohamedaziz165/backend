const express = require('express')

const router = express.Router()

//GET a single task
router.get('/:id', (req, res) => {
    res.json({ msg: 'GET a single task' });
});

// POST a new task
router.post('/', (req, res) => {
    res.json({ msg: 'POST a new task' });
});

// DELETE a task
router.delete('/:id', (req, res) => {
    res.json({ msg: 'DELETE a task' });
});

// UPDATE a task
router.patch('/:id', (req, res) => {
    res.json({ msg: 'UPDATE a task' });
});

module.exports = router;
