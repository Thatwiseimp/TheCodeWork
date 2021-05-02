import React, { useState } from 'react'
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import './SignIn.css';

function SignIn() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function signIn(){
        await auth.signInWithEmailAndPassword(email, password).then(res => {
            history.push('/main',password);
            console.log('Verified')
            //do something else with the response
        }).catch(err => console.log(err))
    }

    return (
        <div className='signIn'>
            <h1>Sign in to your account</h1>
            <input className='input' type='text' placeholder='Enter your email' value={email} onChange={e => setEmail(e.currentTarget.value)} />
            <input className='input' type='password' placeholder='Enter your password' value={password} onChange={e => setPassword(e.currentTarget.value)} />
            <button className='button' onClick={signIn}>Sign In</button>
        </div>
    )
}

export default SignIn