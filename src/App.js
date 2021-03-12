
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { Home } from './components/pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path = "/" component={Home}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
