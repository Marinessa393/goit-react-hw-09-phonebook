import {
  Avatar,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import LockIcon from '@material-ui/icons/Lock';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../redux/auth/auth-operations';

function RegisterView() {
  // state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const onSubmit = useCallback(
    ({ name, email, password }) => {
      dispatch(operations.register({ name, email, password }));
    },
    [dispatch],
  );

  const handleSubmit = useCallback(
    e => {
      onSubmit({ name, email, password });
      setName('');
      setEmail('');
      setPassword('');
    },
    [onSubmit, name, email, password],
  );

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
          handleSubmit({ name, email, password });
        }}
        className="login_form"
      >
        <Avatar className="formAvatar">
          <LockIcon color="action" />
        </Avatar>

        <TextField
          id="name-reg"
          name="name"
          value={name}
          type="name"
          label="Name"
          margin="normal"
          required
          fullWidth
          autoComplete="name"
          autoFocus
          onChange={event => setName(event.target.value)}
          color="primary"
        />
        <TextField
          id="email-reg"
          name="email"
          value={email}
          type="email"
          label="Email Address"
          margin="normal"
          required
          fullWidth
          autoComplete="email"
          onChange={event => setEmail(event.target.value)}
          color="primary"
        />
        <TextField
          id="password-reg"
          name="password"
          value={password}
          type={showPassword ? 'text' : 'password'}
          label="Password"
          margin="normal"
          required
          fullWidth
          onChange={event => setPassword(event.target.value)}
          color="primary"
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
          color="primary"
          fullWidth
        >
          Join
        </Button>
      </form>
    </>
  );
}

export default RegisterView;
