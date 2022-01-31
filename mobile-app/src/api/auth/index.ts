import { ProjectError, User } from "../types";

export const loginAction = async (
  email: string,
  password: string
): Promise<User | ProjectError> => {
  try {
    const result: any = await fetch("http://localhost:8081/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await result.json();
    return {
      id: data.userId,
      email: data.email,
    };
  } catch (error) {
    console.log(error);
    // @ts-ignore
    return { errorMessage: error.code } as ProjectError;
  }
};

export const signupAction = async (
  email: string,
  password: string
): Promise<User | ProjectError> => {
  try {
    const result: any = await fetch("http://localhost:8081/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await result.json();
    return {
      id: data.userId,
      email: data.email,
    };
  } catch (error) {
    console.log(error);
    return { errorMessage: (error as any).message } as ProjectError;
  }
};

export const logoutAction = async () => {
  try {
  } catch (error) {
    console.log(error);
  }
};
