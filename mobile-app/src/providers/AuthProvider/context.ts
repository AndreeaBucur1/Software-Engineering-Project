import React from 'react';
import {ProjectError, User} from "../../api/types";

export interface AuthContextType {
  user: User | undefined;
  isLoggedIn: boolean;
  signup: (email: string, password: string) => Promise<ProjectError | void>;
  login: (email: string, password: string) => Promise<ProjectError | void>;
  logout: () => Promise<void>;
}

export const AuthContext = React.createContext<AuthContextType>({
  user: undefined,
  isLoggedIn: false,
  signup: async () => {},
  login: async () => {},
  logout: async () => {},
});
