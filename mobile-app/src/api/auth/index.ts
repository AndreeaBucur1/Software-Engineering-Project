import { ProjectError, User } from "../types";
import axios from "axios";

export const loginAction = async (
  email: string,
  password: string
): Promise<User | ProjectError> => {

console.log("test")
    // @ts-ignore
    console.log(email, password)
    return axios.post('http://localhost:8081/users/login',  {email, password},
        // @ts-ignore
        { "Content-Type": "application/json" } )
        .then(res => {
          console.log(res.data, "login")
          if(res.data)
          {
          return {

            id: res.data?.id,
            email: res.data?.email
        }}
          return { errorMessage: "Something went wrong" } as ProjectError;
        }).catch ((error)=> {
    console.log(error);
    // @ts-ignore
    return { errorMessage: "Something went wrong" } as ProjectError;
  })
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
