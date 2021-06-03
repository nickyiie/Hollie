import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';

import { Route, Switch, BrowserRouter} from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div className="App">     
    <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route path='/' exact component={Home}/>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
