import React from 'react';
import Routes from "./router/routes";
import Providers from "./providers";


const App: React.FC = () => (
  <Providers>
    <Routes />
  </Providers>
);
export default App;
