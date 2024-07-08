import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
    const [roll, setRoll] = useState('');
    const [username, setUsername] = useState('');
    const [grade, setGrade] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:3001/student/register', {
                roll,
                username,
                grade,
                password,
            })
            .then((res) => {
                if (res.data.registered) {
                    navigate('./dashboard');
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="student-form-container">
            <form className="student-form" onSubmit={handleSubmit}>
                <h2>Add Student</h2>
                <div className="form-group">
                    <label htmlFor="roll">Roll No: </label>
                    <input
                        type="text"
                        id="roll"
                        name="roll"
                        onChange={(event) => {
                            setRoll(event.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">User Name: </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="grade">Grade:</label>
                    <input
                        type="text"
                        id="grade"
                        name="grade"
                        onChange={(event) => {
                            setGrade(event.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default AddStudent;
