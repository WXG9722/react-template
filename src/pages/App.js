import { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Provider store={store}>
          <Switch>
            <Route path="/hooks_example" component={lazy(() => import('./HooksExample'))} />
            <Route path="/class_example" component={lazy(() => import('./ClassExample'))} />
          </Switch>
        </Provider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
