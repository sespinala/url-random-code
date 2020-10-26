import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Form from './components/Form/Form';

const App = () => {
  const randomCode = btoa(Math.random()).substr(5, 12);

  return (
    <Router>
      <Switch>
        <Route exact path="/url-random-code/:code" >
          <Form />
        </Route>

        <Redirect to={`/url-random-code/${randomCode}`} />
      </Switch>
    </Router>
  );
};

export default App;
