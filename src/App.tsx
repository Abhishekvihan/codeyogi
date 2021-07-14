import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Authpage from './pages/Auth.page';
import AppContainer from './pages/AppContainer.page';
import NotFound from './pages/NotFound.page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login"></Redirect>
        </Route>

        <Route path={['/login', '/signup']}>
          <Authpage></Authpage>
        </Route>

        <Route
          path={[
            '/recordings',
            '/dashboard',
            '/batch/:batchNumber/lecture/:lectureNumber',
          ]}
        >
          <AppContainer></AppContainer>
        </Route>

        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
