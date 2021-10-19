import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import ExpartsDoctors from './Pages/Home/ExpartsDoctors/ExpartsDoctors';
import Home from './Pages/Home/Home/Home';
import News from './Pages/Home/News/News';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/news">
              <News></News>
            </Route>
            <Route path="/exparts">
              <ExpartsDoctors></ExpartsDoctors>
            </Route>

            <Route className="/login">
             <Login></Login>
            </Route>
            <Route className="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
