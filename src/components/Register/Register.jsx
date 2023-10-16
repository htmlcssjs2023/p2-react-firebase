import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

const Register = () => {
    const handleSubmit = (event) => {
        console.log(event.target);
        // 1. prevent page refresh
        event.preventDefault();
        
        // collect form data
        const fullName = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(fullName, email, password);

        // create user in firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch( error => {
            console.error(error.message);
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
        
       
    </div>
    );
};

export default Register;