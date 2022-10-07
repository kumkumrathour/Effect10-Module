import React ,{useContext} from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Authcontext from './store/auth-context';
function App() {
  const ctx = useContext(Authcontext);
  return (
    <React.Fragment>
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
      <MainHeader />
      </React.Fragment>

  );
}

export default App;
