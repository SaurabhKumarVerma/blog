import logo from './logo.svg';
import './App.css';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login'
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Landing from './Component/Landing/Landing';
function App() {
  return (
    <div className="App">
      {/* <Register/> */}
      {/* <Login/> */}

      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/landing' component={Landing}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
