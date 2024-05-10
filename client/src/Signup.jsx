import axios from 'axios';
import { useState } from 'react';

function Form(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3011/', {name, email, phoneNumber})
        .then(result => console.log(result.data))
        .catch(err => console.log(err));
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
            <div>
                <div className="p-3 bg-light rounded-4">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <div htmlFor="name">
                                <strong className='text-dark'>Name</strong>
                            </div>
                            <input type="text" placeholder="Enter Full Name" autoComplete='off'
                            name="name" className='form-control rounded-0' onChange={(e) => setName(e.target.value)}/>
                        </div>

                        <div className="mb-3">
                            <div htmlFor="email">
                                <strong className='text-dark'>Email</strong>
                            </div>
                            <input type="email" placeholder="Enter Email" autoComplete='off'
                            name="email" className='form-control rounded-0' onChange={(e) => setEmail(e.target.value)}/>                        
                        </div>

                        <div className="mb-3">
                            <div htmlFor="email">
                                <strong className='text-dark'>Password</strong>
                            </div>
                            <input type="password" placeholder="Enter Password" autoComplete='off'
                            name="password" className='form-control rounded-0' onChange={(e) => setPassword(e.target.value)}/>                        
                        </div>

                        
                                                
                        <button type="submit" className="btn btn-success border-none rounded-2 w-100">
                            Login
                        </button>
                    </form>                    
                </div>
            </div>
        </div>
    )
}

export default Form;