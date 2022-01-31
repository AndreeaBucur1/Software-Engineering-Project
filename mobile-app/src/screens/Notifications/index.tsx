import React, { useContext, useEffect, useState } from "react";
import { Components } from "./styles";
import { AuthContext } from "../../providers/AuthProvider/context";
import { Notification } from "../../api/types";
import { getAllNotifications } from "../../api/user";
import {useHistory, useLocation} from "react-router-dom";
import NotificationCell from "./NotificationCell";

const Notifications = () => {

  const history = useHistory()
  const query = new URLSearchParams(useLocation().search);
  const machineId = query.get('id');
  const {user} = useContext(AuthContext)
  const [notifications, setNotifications] = useState<Notification []>([]);

  const onGetAllNotifications = async () => {
if(machineId) {
  const result = await getAllNotifications(machineId);
  if (!("errorMessage" in result)) {
    setNotifications(result as Notification[]);
  }
    }
  };


  useEffect(() => {
    onGetAllNotifications().then();
  }, []);


  return (
    <Components.Container>
      <Components.NavBar>
        <Components.Title onClick={()=> history.push('/home')}>Back to Home</Components.Title>
      </Components.NavBar>

      <Components.Title>Notifications</Components.Title>
      {notifications.map((item) => (
        <NotificationCell item={item} />
      ))}
    </Components.Container>
  );
};

export default Notifications;
