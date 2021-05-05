import {
  Avatar,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import operations from '../redux/auth/auth-operations';
import LockIcon from '@material-ui/icons/Lock';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useCallback, useState } from 'react';

function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const onLogin = useCallback(
    ({ email, password }) => dispatch(operations.logIn({ email, password })),
    [dispatch],
  );

  const handleSumbit = ({ email, password }) => {
    onLogin({ email, password });
    setEmail('');
    setPassword('');
  };

  const handleClickShowPassword = useCallback(() => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  }, []);

  const handleMouseDownPassword = e => {
    e.preventDefault();
  };

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSumbit({ email, password });
        }}
        className="login_form"
      >
        <Avatar className="formAvatar">
          <LockIcon color="action" />
        </Avatar>
        <TextField
          id="email"
          name="email"
          value={email}
          type="email"
          label="Email Address"
          margin="normal"
          required
          fullWidth
          autoComplete="email"
          autoFocus
          onChange={event => setEmail(event.target.value)}
          color="secondary"
        />
        <TextField
          id="password-log"
          name="password"
          value={password}
          type={showPassword ? 'text' : 'password'}
          label="Password"
          margin="normal"
          required
          fullWidth
          onChange={event => setPassword(event.target.value)}
          color="secondary"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          type="submit"
          className="btn"
          color="secondary"
          fullWidth
        >
          Login
        </Button>

        <NavLink
          to="/register"
          exact
          className="authRouterLink"
          activeClassName="authRouterLink_active"
        >
          Don't have an account? Sign Up
        </NavLink>
      </form>
    </>
  );
}

export default LoginView;
