import logo from './logo.svg';
import './App.css';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login'
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Landing from './Component/Landing/Landing';
import Header from '../src/Header/Header'
import Create from './Component/Blog/CreateBlog/Create';
function App() {
  return (
    <div className="App">
      {/* <Register/> */}
      {/* <Login/> */}
      
      <BrowserRouter>
        <Switch>
        {/* <Header/> */}
          <Route path='/create' component={Create}/>
          <Route path='/login' component={Login}/>
          <Route path='/landing' component={Landing}/>
          <Route path='/register' component={Register}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
