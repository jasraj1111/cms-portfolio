import React, { useState } from 'react';
import './AddProject.css';

const AddProject = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        link: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://localhost:5000/api/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem('token'), // Include JWT token
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) throw new Error('Failed to add project');
                return response.json();
            })
            .then(() => {
                setSuccessMessage('Project added successfully!');
                setErrorMessage('');
                setFormData({ title: '', description: '', link: '' });
            })
            .catch((err) => {
                setErrorMessage(err.message);
                setSuccessMessage('');
            });
    };

    return (
        <section className="add-project">
            <h2>Add New Project</h2>
            {successMessage && <p className="success">{successMessage}</p>}
            {errorMessage && <p className="error">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Project Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Project Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                ></textarea>
                <input
                    type="text"
                    name="link"
                    placeholder="Project Link"
                    value={formData.link}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add Project</button>
            </form>
        </section>
    );
};

export default AddProject;
