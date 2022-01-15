import React, { useMemo, useState } from 'react';
import Loader from '../../components/Loader';
import { LoaderContext } from './context';

const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const value = useMemo(
    () => ({
      isLoading,
      setIsLoading,
    }),
    [isLoading],
  );

  return (
    <LoaderContext.Provider value={value}>
      {children}
      {isLoading && <Loader />}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;
