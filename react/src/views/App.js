import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationMenu from '../layout/NavigationMenu';
import Home from './home/Home';
import Employees from './employees/employees';
import Customers from './customers/customers';
import Sales from './sales/sales';
import Container from '@material-ui/core/Container';
import '../assets/App.css';

function App() {

  return (
    <>
      <NavigationMenu/>
        <Container maxWidth="lg">
          <Router>
            <Switch>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/customers" component={Customers}/>
              <Route exact path="/employees" component={Employees}/>
              <Route exact path="/sales" component={Sales}/>
            </Switch>
        </Router>
        </Container >
        
    </>
  );
}

export default App;
