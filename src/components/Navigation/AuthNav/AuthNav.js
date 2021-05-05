import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <>
      <div>
        <NavLink
          to="/register"
          exact
          className={s.authlink_reg}
          activeClassName={s.activeauthlink}
        >
          Register
        </NavLink>
        <NavLink
          to="/login"
          exact
          className={s.authlink_log}
          activeClassName={s.activeauthlink}
        >
          Login
        </NavLink>
      </div>
    </>
  );
};
