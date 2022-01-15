import React, { useContext} from 'react';
import { Components } from './styles';
import {AuthContext} from "../../providers/AuthProvider/context";

const Home = () => {

  const {user, logout}= useContext(AuthContext)

  return (
    <Components.Container>
      <Components.NavBar>
        <Components.Title>
          Hello {user ? user.firstName : ''}
        </Components.Title>
        <Components.LogoutButton onClick={logout}>Logout</Components.LogoutButton>
      </Components.NavBar>

      <Components.Button>
        <Components.ButtonText>{'START MACHINE'}</Components.ButtonText>
      </Components.Button>
    </Components.Container>
  );
};

export default Home;
