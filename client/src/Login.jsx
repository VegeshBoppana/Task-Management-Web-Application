import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3011/login', { email, password })
            .then(result => {
                console.log(result.data);
                // Redirect to the login page after successful form submission
                window.location.href = 'kanban';
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
            <div>
                <div className="p-3 bg-light rounded-4">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <div htmlFor="email">
                                <strong className='text-dark'>Email</strong>
                            </div>
                            <input type="email" placeholder="Enter Email" autoComplete='off'
                                name="email" className='form-control rounded-0' onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <div htmlFor="password">
                                <strong className='text-dark'>Password</strong>
                            </div>
                            <input type="password" placeholder="Enter Password" autoComplete='off'
                                name="password" className='form-control rounded-0' onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <button type="submit" className="btn btn-success border-none rounded-2 w-100">
                            Login
                        </button>
                    </form>
                    <Link to="/">Don't have an account? Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;
