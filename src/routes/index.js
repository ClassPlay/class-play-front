import { Route, Switch } from 'react-router';
import Home from '../pages/Home';
import Questions from '../pages/Questions';
import PageVideo from '../pages/Video';
import Login from '../pages/Login';
import Final from '../pages/Final';

function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>
      <Route exact path='/home'>
        <Home />
      </Route>
      <Route exact path='/video'>
        <PageVideo />
      </Route>
      <Route exact path='/questions'>
        <Questions />
      </Route>
      <Route exact path='/final'>
        <Final />
      </Route>
    </Switch>
  );
}

export default Routes;
