import React, { Dispatch, SetStateAction } from 'react';

export interface LoaderContextType {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const LoaderContext = React.createContext<LoaderContextType>({
  isLoading: false,
  setIsLoading: () => {
    return;
  },
});
