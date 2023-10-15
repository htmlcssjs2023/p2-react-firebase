import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.init';

const auth = getAuth(app);

const Register = () => {
        const [error, setError] = useState('');
        const [success, setSuccess] = useState('');
    const handleSubmit = (event)=>{
        
        // 1. Prevent Page refresh
        event.preventDefault();

        // Collect form data
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);

            // form input formate validation
        if(/(?=.*[A-Z])/.test(password)){
            setError('Please add at least one uppercase');
            return;
        }
        else if(/(?=.*[0-9].*[0-9])/){
            setError('Please add at least number');
            return;
        }
        else if(password.length < 6){
            setError('Password must be at least six character');
            return;
        }

    // create user 
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCaredential)=>{
        const user = userCaredential.user;
        console.log(user);
    })
    .catch(error =>{
        console.log(error.message);
    })

    // sign in user with email and password
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user = userCredential.user;
        console.log(user);
    })
    .catch(error =>{
        console.log(error.message);
    })

    }
    return (
        <div className='w-50 mx-auto'>
        <h2>Please Login</h2>
        <form onSubmit={handleSubmit}>
            
             <div className="form-group mb-3">
                <label htmlFor="name">Full Name</label>
                <input type="text" name='name' className="form-control" id="name"  placeholder="Enter Name"/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="email">Email address</label>
                <input type="email" name='email' className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
               

            </div>
            <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input type="password" name='password' className="form-control" id="password" placeholder="Password"/>
            
            </div>
            <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <p className='text-danger'>{error}</p>
       
    </div>
    );
};

export default Register;