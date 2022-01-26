import React, { useContext, useEffect, useState } from "react";
import { Components } from "./styles";
import { AuthContext } from "../../providers/AuthProvider/context";
import { Notification } from "../../api/types";
import { addMachine, getAllMachines, getAllNotifications } from "../../api/user";
import { LoaderContext } from "../../providers/LoaderProvider/context";
import MachineCell from "./MachineCell";
import TextField from "../../components/TextFIeld";
import { ReactComponent as BellIcon } from "../../assets/icons/bell.svg";
Notification
const Notifications = () => {

  const {user} = useContext(AuthContext)
  const [notifications, setNotifications] = useState<Notification []>([]);
  const { setIsLoading } = useContext(LoaderContext);

  const onGetAllNotifications = async () => {
    if (user) {
      const result = await getAllNotifications(user.id);
      if (!("errorMessage" in result)) {
        setNotifications(result as Notification[]);
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
    history.pushState('/notification')
  }

  return (
    <Components.Container>
      <Components.NavBar>
        <Components.Title>Hello {user ? user.firstName : ""}</Components.Title>
        <BellIcon onClick ={onNotificationClick} />
        <Components.LogoutButton onClick={logout}>
          Logout
        </Components.LogoutButton>
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

export default Notifications;
