import { Toolbar, AppBar, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import selectors from '../../../redux/auth/auth-selectors';
import { AuthNav } from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import s from './AppBar.module.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  appBar: {
    backgroundColor: '#424242',
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

function AppHeader() {
  const classes = useStyles();

  const isAuth = useSelector(selectors.getIsAuthenticated);
  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          <div>
            <NavLink
              to="/"
              exact
              className={s.navlink_main}
              activeClassName={s.activenavlink}
            >
              Main
            </NavLink>
            {isAuth && (
              <NavLink
                to="/contacts"
                exact
                className={s.navlink_contacts}
                activeClassName={s.activenavlink}
              >
                Contacts
              </NavLink>
            )}
          </div>
          {isAuth ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default AppHeader;
