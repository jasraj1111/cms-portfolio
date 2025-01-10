const express = require('express');
const { getAllProjects, addProject } = require('../controllers/projectController');
const { updateProject } = require('../controllers/projectController');
const { deleteProject } = require('../controllers/projectController');
const auth = require('../middleware/auth'); 

const router = express.Router();

router.get('/', getAllProjects);
router.post('/', addProject);
router.post('/', auth, addProject);
router.delete('/:id', auth, deleteProject);
router.put('/:id',auth, updateProject);

module.exports = router;
