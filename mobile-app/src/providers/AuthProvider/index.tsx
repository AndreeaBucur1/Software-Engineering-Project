import React, {  useMemo } from 'react';
import { AuthContext } from './context';
import useLocalStorage from "../../hooks/useLocalStorage";
import {loginAction, logoutAction, signupAction} from "../../api/auth";
import {ProjectError, User} from "../../api/types";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage<boolean>('isLoggedIn', false);
  const [user, setUser] = useLocalStorage<User | undefined>('User', undefined);

  const login = async (email: string, password: string): Promise<ProjectError | void> => {
    const result = await loginAction(email, password);
    if (result && 'errorMessage' in result) {
      return result as ProjectError;
    }
    setIsLoggedIn(true);
    setUser(result);
  };

  const signup = async (email: string, password: string): Promise<ProjectError | void> => {
    const result = await signupAction(email, password);
    if (result && 'errorMessage' in result) {
      return result as ProjectError;
    }

    console.log(result)
    setIsLoggedIn(true);
    setUser(result);
  };

  const logout = async () => {
    await logoutAction();
    setIsLoggedIn(false);
    setUser(undefined);
  };

  const value = useMemo(() => {
    return {
      isLoggedIn,
      user,
      login,
      logout,
      signup,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
