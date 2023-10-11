import './App.css';
import Homepage from './HomePage';
import Test from './components/Test';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {  
  return (
    <Router>
      
      <div className="content">      
      <Switch>
        <Route exact path="/">
          <Homepage />  
        </Route>
        <Route path = "/test">
            <Test />
        </Route>        
      </Switch> 
      </div>      
    </Router>
      
  );
}

export default App;
