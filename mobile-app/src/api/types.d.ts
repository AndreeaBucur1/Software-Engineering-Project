export interface User  {
  email: string;
  firstName?: string;
  lastName?: string;
  id: string
}

export interface ProjectError {
  errorMessage: string;
}

export interface Machine
{
  id: string;
}


export interface Notification
{
  id: string;
  message: string
}
