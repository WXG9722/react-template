import store from '../store/store';
import zhCN from 'antd/lib/locale/zh_CN';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Provider store={store}>
          <ConfigProvider locale={zhCN}>
            <Switch>
              <Route path="/hooks_example" component={lazy(() => import('./HooksExample'))} />
              <Route path="/class_example" component={lazy(() => import('./ClassExample'))} />
            </Switch>
          </ConfigProvider>
        </Provider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
