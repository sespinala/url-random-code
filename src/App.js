import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Form } from './components';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/url-random-code/:code" >
          <Form />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
