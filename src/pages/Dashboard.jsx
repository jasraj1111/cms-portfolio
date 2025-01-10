import React, { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [editingProject, setEditingProject] = useState(null);
    const [formData, setFormData] = useState({ title: '', description: '', link: '' });
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetch('https://localhost:5000/api/projects', {
            headers: {
                'x-auth-token': localStorage.getItem('token'), // Include JWT token
            },
        })
            .then((response) => {
                if (!response.ok) throw new Error('Failed to fetch projects');
                return response.json();
            })
            .then((data) => setProjects(data))
            .catch((err) => setErrorMessage(err.message));
    }, []);

    const handleEditClick = (project) => {
        setEditingProject(project);
        setFormData({ title: project.title, description: project.description, link: project.link });
    };

    const handleDelete = (id) => {
        fetch(`https://localhost:5000/api/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'x-auth-token': localStorage.getItem('token'),
            },
        })
            .then((response) => {
                if (!response.ok) throw new Error('Failed to delete project');
                setProjects(projects.filter((project) => project._id !== id));
            })
            .catch((err) => setErrorMessage(err.message));
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch(`https://localhost:5000/api/projects/${editingProject._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem('token'),
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) throw new Error('Failed to update project');
                return response.json();
            })
            .then((updatedProject) => {
                setProjects(
                    projects.map((project) =>
                        project._id === updatedProject._id ? updatedProject : project
                    )
                );
                setEditingProject(null); // Reset editing state
            })
            .catch((err) => setErrorMessage(err.message));
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="dashboard">
            <h2>Project Dashboard</h2>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr key={project._id}>
                            <td>{project.title}</td>
                            <td>{project.description}</td>
                            <td>
                                <button onClick={() => handleEditClick(project)}>Edit</button>
                                <button onClick={() => handleDelete(project._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editingProject && (
                <form onSubmit={handleUpdate}>
                    <h3>Edit Project</h3>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Title"
                        required
                    />
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Description"
                        required
                    />
                    <input
                        type="text"
                        name="link"
                        value={formData.link}
                        onChange={handleChange}
                        placeholder="Project Link"
                        required
                    />
                    <button type="submit">Update</button>
                </form>
            )}
        </section>
    );
    
};



export default Dashboard;
