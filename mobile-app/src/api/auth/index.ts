import {ProjectError, User} from "../types";

export const loginAction = async (email: string, password: string): Promise<User | ProjectError> => {
  try {
    //login
    return {
      errorMessage : "error"
    }
  } catch (error) {
    console.log(error);
    // @ts-ignore
    return { errorMessage: error.code } as ProjectError;
  }
};

export const signupAction = async (email: string, password: string): Promise<User | ProjectError> => {
  try {
    //signup
    // @ts-ignore
    return {
      id: "1", lastName:"denisa",
      firstName: "fd", email :"d"
    }
  } catch (error) {
    console.log(error);
    return { errorMessage: (error as any).message } as ProjectError;
  }
};

export const logoutAction = async () => {
  try {
   //logout
  } catch (error) {
    console.log(error);
  }
};
