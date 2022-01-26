import React, { useContext, useEffect, useState } from "react";
import { Components } from "./styles";
import { AuthContext } from "../../providers/AuthProvider/context";
import { Notification } from "../../api/types";
import { getAllNotifications } from "../../api/user";
import {useHistory} from "react-router-dom";
import NotificationCell from "./NotificationCell";

const Notifications = () => {

  const history = useHistory()
  const {user} = useContext(AuthContext)
  const [notifications, setNotifications] = useState<Notification []>([]);

  const onGetAllNotifications = async () => {
    if (user) {
      const result = await getAllNotifications(user.id);
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
