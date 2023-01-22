import { Route, Switch } from 'react-router';
import Home from '../pages/Home';
import Questions from '../pages/Questions';
import PageVideo from '../pages/Video';

function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/video'>
        <PageVideo />
      </Route>
      <Route exact path='/questions'>
        <Questions />
      </Route>
    </Switch>
  );
}

export default Routes;
