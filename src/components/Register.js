import React, { useState } from 'react';
import { registerUser } from '../api';


const Register = ({ setToken, navigate }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        const results = await registerUser(username, password);
        if(results.success) {
            setToken(results.data.token)
            window.localStorage.setItem('token', results.data.token)
            navigate('/profile')
        } else {
            console.log(results.error.message)
        }
        
    }

    return (
        <div id='register-container'>
            <h1>Register</h1>
            <form onSubmit={(event) => {
                event.preventDefault()
                handleSubmit();
                }}>
                <input 
                    type='text'
                    placeholder='Enter Username'
                    onChange={(event) => setUsername(event.target.value)}>
                </input>
                <input 
                    type='password'
                    placeholder='Enter Password'
                    onChange={(event) => setPassword(event.target.value)}>
                </input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Register;