import { getAuth, signInWithEmailAndPassword,sendPasswordResetEmail} from 'firebase/auth';
import React, { useRef, useState } from 'react';
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef();

    const handleLogin = event =>{
        const form = event.target;
        // console.log(form);
        // prevent refresh page
        event.preventDefault();
        setError('');
        setSuccess('');
        // collect form data
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        // console.log(email,password);

        // Sign in firebase user
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess('User login successful');
            setError('');
        })
        .catch(error => {
            setError(error.message);
        })  
    }

    // Password Reset using firebase
    const handleResetPassword = event => {
        const email = emailRef.current.value;
        if (!email) {
            alert('Please provide your email address to reset password')
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Please check your email')
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

  

    return (
        
            <div className="container">
              <div className="row justify-content-center">
                <h3 className='text-center'>Login</h3>
                <div className="col-md-4">
                    <p className='text-success'>{success}</p>
                  <form onSubmit={handleLogin}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        ref={emailRef}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Log In
                    </button>
                    <p className='text-danger'>{error}</p>
                  </form>
                  <p>If you forgot your password <button onClick={handleResetPassword}>Rest Password</button></p>
                  <p><small>If you haven't account please
                    <Link to="/register"> Register</Link>
                 </small></p>
                </div>
              </div>
            </div>
    );
};
export default Login;