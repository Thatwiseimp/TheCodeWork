  
import React, { useState, useEffect } from 'react'
import SignIn from './SignIn';
import SignUp from './SignUp';
import { auth } from '../firebase';
import './Auth.css';
import { useHistory } from 'react-router-dom';

function Auth() {
    const history = useHistory();
    const [authType, setAuthType] = useState('signIn');

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) history.push('/main')
        })
    }, [])

    return (
        <div className='auth'>
            {authType === 'signIn' ?
                <div className='container'>
                    <SignIn />
                    <p className='p'>New here? <span className='span' onClick={() => setAuthType('signUp')}>Create account.</span></p>
                </div>
                :
                <div className='container'>
                    <SignUp />
                    <p className='p'>Have an account? <span className='span' onClick={() => setAuthType('signIn')}>Sign In.</span></p>
                </div>
            }
        </div>
    )
}

export default Auth