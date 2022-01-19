import React, { useContext, useState } from 'react';
import { Components } from './styles';
import TextField from '../../components/TextFIeld';
import { AuthContext } from '../../providers/AuthProvider/context';
import { LoaderContext } from '../../providers/LoaderProvider/context';
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | undefined>();

  const { signup } = useContext(AuthContext);
  const { setIsLoading } = useContext(LoaderContext);

  const onSignupPress = async () => {
    if (email.length === 0 || password.length === 0 || confirmPassword.length === 0) {
      setError('Fields are not completed');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do no match');
      return;
    }

    setIsLoading(true);
    const error = await signup(email, password);
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
          <TextField value={email} onChangeText={(e) => setEmail(e.target.value)} />
          <TextField
            type='password'
            value={password}
            onChangeText={(e) => setPassword(e.target.value)}
          />
          <TextField
            type='password'
            value={confirmPassword}
            onChangeText={(e) => setConfirmPassword(e.target.value)}
          />
        </Components.TextFieldsContainer>
        <Components.ButtonsContainer>
          <Components.Button onClick={onSignupPress}>
            <Components.ButtonText>{'Sign Up'}</Components.ButtonText>
          </Components.Button>
          <Components.LoginButton to='/login'>Login</Components.LoginButton>
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

export default Signup;
