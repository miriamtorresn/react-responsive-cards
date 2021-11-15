import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// Setting up app route based.
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;