const Project = require('../models/Project');

// Get all projects
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add a new project
exports.addProject = async (req, res) => {
    try {
        console.log('Request body:', req.body); // Log request data
        const { title, description, link } = req.body;

        if (!title || !description || !link) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newProject = new Project({
            title,
            description,
            link,
            image: 'image.jpg', 
        });

        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    } catch (err) {
        console.error('Error saving project:', err.message); 
        res.status(500).json({ error: err.message });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if (!project) {
            return res.status(404).json({ msg: 'Project not found' });
        }
        res.status(200).json({ msg: 'Project deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



// Update project details
exports.updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, link } = req.body;

        const updatedProject = await Project.findByIdAndUpdate(
            id,
            { title, description, link },
            { new: true, runValidators: true }
        );

        if (!updatedProject) {
            return res.status(404).json({ msg: 'Project not found' });
        }

        res.status(200).json(updatedProject);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
