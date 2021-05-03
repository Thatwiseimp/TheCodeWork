import React from 'react'
import {useState,useEffect} from 'react'
import './Home.css'
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
const axios = require('axios');


function Home() {
    
    const[profiles,setprofiles]=useState([])
    let lst=[];

    function getPost(){
        axios.get('http://localhost:8000/profile/')
        .then(data=>setprofiles(data.data))
    }

    const history = useHistory();
    const logOut = () => {
      auth.signOut().then(res => {
          history.push('./auth');
      }).catch(err => console.log(err))
    }

    profiles.map(profile=>lst.push(profile.username.substring(0, profile.username.lastIndexOf("@"))))
    


  useEffect(() => {

    getPost()

  }, [])
    return (
        <div className='home'>
          <h2>Hello, {lst[lst.length-1]}!</h2>
          <button className='button' onClick={logOut}>Log out</button>
            
        </div>
    )
}

export default Home
