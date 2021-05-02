import React, { useState } from 'react'
import './SignUp.css';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';

function SignUp() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = () => {
        auth.createUserWithEmailAndPassword(email, password).then(res => {
            history.push('/main');
            console.log('SignedUp')
            //do something with the response
        }).catch(err => console.log(err))
    }
    return (
        <div className='signUp'>
            <h1>Register your account</h1>
            <input className='input' type='text' placeholder='Enter your email' onChange={e => setEmail(e.currentTarget.value)} />
            <input className='input' type='password' placeholder='Enter your password' onChange={e => setPassword(e.currentTarget.value)} />
            <button className='button' onClick={signUp}>Sign Up</button>
        </div>
    )
}

export default SignUp