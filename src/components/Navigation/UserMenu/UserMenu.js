import { Button } from '@material-ui/core';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../../../redux/auth/auth-operations';
import selectors from '../../../redux/auth/auth-selectors';
import s from './UserMenu.module.css';

function UserMenu() {
  const name = useSelector(selectors.getUserName);

  const dispatch = useDispatch();
  const onLogout = useCallback(() => dispatch(operations.logOut()), [dispatch]);

  return (
    <>
      <div className={s.userMenu}>
        <p className={s.greeting}>Hello, {name}</p>
        <Button
          type="button"
          onClick={onLogout}
          color="primary"
          variant="contained"
        >
          Logout
        </Button>
      </div>
    </>
  );
}

export default UserMenu;
