import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Auth from './components/Auth';
import Main from './components/Main';
import './App.css';

import styled from 'styled-components'
import {useState,useEffect} from 'react'
const axios = require('axios');



function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const[profiles,setprofiles]=useState([])
  console.log(user)
  
  // function getPost(){
  //   axios.get('http://localhost:8000/')
  //   .then((data)=>{setprofiles(data.data)})
  // }

  // useEffect(() => {

  //   getPost()

  // }, [])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/auth' component={Auth} />
          <Route path='/main' component={Main} />
          <Redirect to='/auth' from='*' />
        </Switch>
      </Router>
    </div>
  );
}
    
export default App;
    // <Router>
    //   {/* CHECK FOR USER LOGIN
    //   {
    //     !USER ? () : ()
    //     if user ? exists(do this) : if not(do that!)
    //   } */}
    //   {
    //     !user ? (
    //       <Login setUser={setUser} />
    //     ) : (
    //       <Container>
    //         heyy
    //       </Container>
    //     )
    //   }
    // </Router>
//   );
// }

// export default App;
// const Container = styled.div ``