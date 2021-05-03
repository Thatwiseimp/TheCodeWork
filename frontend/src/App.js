
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Auth from './components/Auth';
import Main from './components/Main';
import Home from './components/Home'
import './App.css';
import {useState} from 'react'

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  console.log(user)
  

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/auth' component={Auth} />
          <Route path='/main' component={Main} />
          <Route path='/home' component={Home} />
          <Redirect to='/auth' from='*' />
        </Switch>
      </Router>
    </div>
  );
}
    
export default App;