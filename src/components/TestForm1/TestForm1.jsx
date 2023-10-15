import React, { useRef, useState } from 'react';

const TestForm1 = () => {

    // declare useState();
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');


    // console.log(email, password);
    // Input change 
    const handleEmailChange = (event)=> {
        const email = event.target.value;
        // console.log(email);
        // setEmail(email);
    }

    // Input change with password
    const handlePasswordChange = (event) => {
        const password = event.target.value;
        // console.log(password);
        // setPassword(password);
    }

    // Controll this form from one place
  
    const handleSubmitForm = (event)=>{
        event.preventDefault();

        const email = event.target.email.value;
        let password = event.target.password.value;
        const checkbox = event.target.checkbox.value;
        console.log(email, password, checkbox);
        // console.log(event.target);
    }

    const passwordField = useRef('');
    // Show Password 
    const handleShowPassword = ()=>{
        const password = passwordField.current;
        // console.log(password);
        const type = password.getAttribute("type") === "password"? "text": "password";
        password.setAttribute("type", type);
    }

    return (
        <div>
            <form onSubmit={handleSubmitForm} className='w-50 mx-auto'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={handleEmailChange} name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input ref={passwordField} onChange={handlePasswordChange} name='password' type="password" className="form-control" id="password-id" />
                </div>
                <div className="mb-3">
                    <input onClick={handleShowPassword} type="button" value="show password"/>
                </div>
                <div className="mb-3 form-check">
                    <input name='checkbox' type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
             </form>
        </div>
    );
};

export default TestForm1;