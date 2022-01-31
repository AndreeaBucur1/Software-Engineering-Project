import { ProjectError, User } from "../types";

export const loginAction = async (
  email: string,
  password: string
): Promise<User | ProjectError> => {
  try {
    // const result:any = await fetch('http://localhost:8081/users/register', {
    //   method: "POST",
    //   body : JSON.stringify({ email, password}),
    //   headers:{}
    // })
    // let user : User = {
    //   id: result.userId,
    //   email:result.email
    // }
    // return user;
    return {
      email: "hh",
      id: "fh",
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
    console.log(result, "r");
    const data = result.json();
    console.log(data);
    let user: User = {
      id: data.userId,
      email: data.email,
    };
    return user;
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
