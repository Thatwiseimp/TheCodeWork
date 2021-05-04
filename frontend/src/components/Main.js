import React, { useState,useEffect } from 'react'
import './Main.css';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import firebase from '@firebase/app'


function Main() {

    const [phoneNumber, setphoneNumber] = useState('')
    const [code, setcode] = useState('')
    const [result,setresult] = useState()

    setTimeout(function(){
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
            "recaptcha-container",
            {
              size: "normal",
              callback: function(response) {

              }
            }
        );

    },1000)
    
    function submitPhoneNumberAuth() {         
        var appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(res=>setresult(res))
        .catch(err=>console.log(err))
    }
    function submitPhoneNumberAuthCode() {
        result.confirm(code)
        .then(res => {
            history.push('./home');
        })
        .catch(err=>console.log(err))
    }

    
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (!user) history.push('/auth');
        })
    })
    const history = useHistory();

    const logOut = () => {
        auth.signOut().then(res => {
            history.push('/auth');
            //do something else with res
        }).catch(err => console.log(err))
    }

    return (
        <div className='main'>
            <h1>Hey there, you're Half way through!</h1>
            <input value={phoneNumber} placeholder='Enter your number' onChange={(event=>setphoneNumber(event.target.value))} />
            <button disabled={!phoneNumber} className='button' onClick={submitPhoneNumberAuth}>Send OTP</button>
            <input value={code} placeholder='Enter the OTP' onChange={(event=>setcode(event.target.value))} />
            <button disabled={!code} className='button' onClick={submitPhoneNumberAuthCode}>Verify</button>
            <button className='button' onClick={logOut}>Log out</button>
            <div id="recaptcha-container"></div>
        </div>
        
    )
}

export default Main