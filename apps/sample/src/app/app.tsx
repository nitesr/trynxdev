import styles from './app.module.scss';

import { Route, Link, Switch } from 'react-router-dom';

import { UiPublic } from '@reactapp/ui-public';

export function App() {
  return (
    <Switch>
      <Route path="/orders" component={UiPublic} />
    </Switch>
  );
}

export default App;
