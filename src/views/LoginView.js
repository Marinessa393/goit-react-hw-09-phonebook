import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import operations from '../redux/auth/auth-operations';
import { LockOutlined, Visibility, VisibilityOff } from '@material-ui/icons';
import { useCallback, useState } from 'react';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="secondary" href="https://github.com/Marinessa393">
        Marinessa
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: 'calc(100vh - 50px)',
  },
  image: {
    backgroundImage:
      'url(https://source.unsplash.com/collection/71191721/1600x900)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.light,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function LoginView() {
  const classes = useStyles();

  // state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Dispatch
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
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <form
              className={classes.form}
              onSubmit={e => {
                e.preventDefault();
                handleSumbit({ email, password });
              }}
            >
              <TextField
                id="email-log"
                name="email"
                value={email}
                type="email"
                label="Email Address"
                required
                fullWidth
                autoComplete="email"
                autoFocus
                variant="outlined"
                margin="normal"
                color="secondary"
                onChange={event => setEmail(event.target.value)}
              />
              <TextField
                id="password-log"
                name="password"
                value={password}
                type={showPassword ? 'text' : 'password'}
                label="Password"
                required
                fullWidth
                variant="outlined"
                margin="normal"
                color="secondary"
                autoComplete="current-password"
                onChange={event => setPassword(event.target.value)}
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
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Login
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/register" variant="body2" color="primary">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default LoginView;
