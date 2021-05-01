import React from 'react'
import {useState,useEffect} from 'react'
const axios = require('axios');

function Profile() {
    const[profiles,setprofiles]=useState([])

    function getPost(){
      axios.get('http://localhost:8000/')
      .then((data)=>{setprofiles(data.data)})
    }
  
    useEffect(() => {
  
      getPost()
  
    }, [])
    return (
      <div className="App">
        {profiles.map(profile=><p>{profile.name} | {profile.email} | {profile.phone_number}</p>)}
      </div>
    );
  }

export default Profile
