import React, { useContext, useState } from 'react';
import { Components } from './styles';
import TextField from '../../components/TextFIeld';
import { AuthContext } from '../../providers/AuthProvider/context';
import { LoaderContext } from '../../providers/LoaderProvider/context';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | undefined>();

  const { login } = useContext(AuthContext);
  const { setIsLoading } = useContext(LoaderContext);

  const handleClick = async () => {
    if (email.length === 0 || password.length === 0) {
      setError('Fields are not completed');
      return;
    }
    setIsLoading(true);
    const error = await login(email, password);
    setIsLoading(false);
    if (error) {
      setError(error.errorMessage);
    }
    setIsLoading(false);
  };

  const dismissToast = () => {
    setError(undefined);
  };

  return (
    <Components.BigContainer>
      <Components.Container>
        <Components.Title>{'Washing Machine'}</Components.Title>
        <Components.TextFieldsContainer>
          <Components.Label>{'Email'}</Components.Label>
          <TextField value={email} onChangeText={(e) => setEmail(e.target.value)} />
          <Components.Label>{'Password'}</Components.Label>
          <TextField
            type='password'
            value={password}
            onChangeText={(e) => setPassword(e.target.value)}
          />
        </Components.TextFieldsContainer>
        <Components.ButtonsContainer>
          <Components.Button onClick={handleClick}>
            <Components.ButtonText>Login</Components.ButtonText>
          </Components.Button>
          <Components.SignUpButton to='/signup'>Sign Up</Components.SignUpButton>
        </Components.ButtonsContainer>
      </Components.Container>

      <Snackbar transitionDuration={0} open={!!error} autoHideDuration={2500} onClose={dismissToast}>
        <MuiAlert elevation={6} onClose={dismissToast} sx={{ width: '100%' }} variant='filled' severity={'error'}>
          <Components.ErrorText>{error}</Components.ErrorText>
        </MuiAlert>
      </Snackbar>
    </Components.BigContainer>
  );
};

export default Login;
