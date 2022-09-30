import './App.styles.scss';
import Header from './Components/Header/HomeHeader/header'
import SignIn from './Components/signIn/SignIn';
import {  Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Home" component={ Header } />
        <Route path="/signin" component={ SignIn } />
        <Redirect to='/Home' component={ Header } />
      </Switch>
    </div>
  );
}

export default App;