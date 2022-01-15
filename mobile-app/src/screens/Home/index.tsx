import React, { useContext} from 'react';
import { Components } from './styles';
import {AuthContext} from "../../providers/AuthProvider/context";

const Home = () => {

  const {user, logout}= useContext(AuthContext)

  return (
    <Components.Container>

    </Components.Container>
  );
};

export default Home;
