import React, { useContext, useEffect, useState } from "react";
import { Components } from "./styles";
import { AuthContext } from "../../providers/AuthProvider/context";
import { Machine } from "../../api/types";
import { addMachine, getAllMachines } from "../../api/user";
import { LoaderContext } from "../../providers/LoaderProvider/context";
import MachineCell from "./MachineCell";
import TextField from "../../components/TextFIeld";
import { ReactComponent as BellIcon } from "../../assets/icons/bell.svg";
import { useHistory } from "react-router-dom";

const Home = () => {
  const { user, logout } = useContext(AuthContext);
  const [machines, setMachines] = useState<Machine[]>([]);
  const [newMachineId, setNewMachineId] = useState<string | undefined>();
  const { setIsLoading } = useContext(LoaderContext);
  const history = useHistory();

  const onGetAllMachines = async () => {
    if (user) {
      const result = await getAllMachines(user.id);
      if (!("errorMessage" in result)) {
        setMachines(result);
      }
    }
  };

  const addWashingMachine = async () => {
    if (user && newMachineId) {
      setIsLoading(true);
      const result = await addMachine(user.id, newMachineId);
      if (!("errorMessage" in result)) {
        const machines = await getAllMachines(user.id);

        if (!("errorMessage" in machines)) {
          setMachines(machines);
        }
      }
      setNewMachineId(undefined);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    onGetAllMachines().then();
  }, []);

  const onNotificationClick = () => {
    history.push("/notifications");
  };

  return (
    <Components.Container>
      <Components.NavBar>
        <Components.Title>Hello</Components.Title>
        <Components.Wrapper>
        <Components.IconWrapper onClick = {onNotificationClick}>
          <BellIcon/>
        </Components.IconWrapper>

        <Components.LogoutButton onClick={logout}>
          Logout
        </Components.LogoutButton>
        </Components.Wrapper>
      </Components.NavBar>

      <Components.Title>Add a new washing machine</Components.Title>
      <TextField
        type="text"
        value={newMachineId}
        onChangeText={(e) => setNewMachineId(e.target.value)}
      />
      <Components.Button onClick={addWashingMachine}>
        <Components.ButtonText>{"ADD"}</Components.ButtonText>
      </Components.Button>
      <Components.Title>Your washing machines</Components.Title>
      {machines.map((item) => (
        <MachineCell item={item} />
      ))}
    </Components.Container>
  );
};

export default Home;
