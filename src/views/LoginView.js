import {
  Avatar,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import operations from '../redux/auth/auth-operations';
import LockIcon from '@material-ui/icons/Lock';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useState } from 'react';

function LoginView({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSumbit = e => {
    e.preventDefault();
    onLogin({ email, password });
    setEmail('');
    setPassword('');
  };

  const handleClickShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const handleMouseDownPassword = e => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSumbit} className="login_form">
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

const mapDispatchToProps = {
  onLogin: operations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
