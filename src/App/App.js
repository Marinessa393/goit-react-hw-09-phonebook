import { lazy, Suspense, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from '../components/Navigation/AppBar/AppBar';
import operations from '../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';
import './App.css';

const MainPageView = lazy(() => import('../views/MainPageView'));
const ContactsView = lazy(() => import('../views/ContactsView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/" component={MainPageView} />
          <PublicRoute
            exact
            path="/register"
            redirectTo="/"
            restricted
            component={RegisterView}
          />
          <PublicRoute
            exact
            path="/login"
            redirectTo="/contacts"
            restricted
            component={LoginView}
          />
          <PrivateRoute
            exact
            path="/contacts"
            component={ContactsView}
            redirectTo="/login"
          />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
