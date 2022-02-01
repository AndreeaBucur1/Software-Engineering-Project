import React, {useState} from "react";
import { Components } from "./styled";
import { Machine } from "../../../api/types";
import { ReactComponent as BellIcon } from "../../../assets/icons/bell.svg";
import { useHistory } from "react-router-dom";
import TextField from "../../../components/TextFIeld";
import {startMachine} from "../../../api/user";

const MachineCell = ({ item }: { item: Machine }) => {
  const history = useHistory();
  const[message, setMessage] = useState('START MACHINE')

  const onNotificationClick = () => {
    history.push(`/notifications/?id=${item.id}`);
  };

  const onStart =async  () => {
      setMessage("STARTED")
      await startMachine(item.id, 'denim1')
  }

  return (
    <Components.Container>
        <Components.Text>#{item.id}</Components.Text>
      <Components.Button onClick={onStart}>
        <Components.ButtonText>{message}</Components.ButtonText>
      </Components.Button>
      <Components.IconWrapper onClick={onNotificationClick}>
        <BellIcon />
      </Components.IconWrapper>
    </Components.Container>
  );
};

export default MachineCell;
