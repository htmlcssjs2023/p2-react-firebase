import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (event) => {
        console.log(event.target);
        // prevent page refresh
        event.preventDefault();
        setSuccess('');
        setError('');
        
        // collect form data
        const fullName = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(fullName, email, password);


        // password pattern formate validation
        if(!/(?=.*[A-Z])/.test(password)){
            setError('Please add at least one uppercase');
            return;
        }
        else if(!/(?=.*[0-9].*[0-9])/.test(password)){
            setError('Please add at least one digit');
            return;
        }
        else if(password.length < 6){
            setError('Password must be 6 character');
            return;
        }


        // create user in firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            // clear error message
            
            // form submit success message
            setSuccess('Form has been submitted successfully !');
            // Having submit form clear form data
            event.target.reset();
        })
        .catch( error => {
            // console.error(error.message);
            setError(error.message);
        })

    }
        
    return (
        <div className='w-50 mx-auto'>
        <h2>Please Login</h2>
        <form onSubmit={handleSubmit}>
             <p className='text-success'>{success}</p>
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
                <p className='text-danger'>{error}</p>
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