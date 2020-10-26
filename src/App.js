import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import Form from './components/Form/Form';

const App = ({code}) => {
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

const mapStateToProps = ({code}) => ({
  code: code
});

export default connect(mapStateToProps)(App);
