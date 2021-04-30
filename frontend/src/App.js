import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
const axios = require('axios');

function App() {

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

export default App;
