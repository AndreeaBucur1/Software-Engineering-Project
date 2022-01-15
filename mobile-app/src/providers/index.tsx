import { StyledEngineProvider } from '@mui/material/styles';
import React from 'react';
import AuthProvider from './AuthProvider';
import LoaderProvider from './LoaderProvider';

const Providers = ({ children }: { children?: React.ReactNode }) => {
  return (
    <StyledEngineProvider injectFirst>
        <LoaderProvider>
            <AuthProvider>{children}</AuthProvider>
        </LoaderProvider>
    </StyledEngineProvider>
  );
};

export default Providers;
