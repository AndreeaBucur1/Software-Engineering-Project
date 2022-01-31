import React from "react";
import { Components } from "./styled";
import { Machine } from "../../../api/types";
import { ReactComponent as BellIcon } from "../../../assets/icons/bell.svg";
import { useHistory } from "react-router-dom";

const MachineCell = ({ item }: { item: Machine }) => {
  const history = useHistory();

  const onNotificationClick = () => {
    history.push("/notifications");
  };
  return (
    <Components.Container>
      <Components.Text>#{item.id}</Components.Text>
      <Components.Button>
        <Components.ButtonText>{"START MACHINE"}</Components.ButtonText>
      </Components.Button>
      <Components.IconWrapper onClick={onNotificationClick}>
        <BellIcon />
      </Components.IconWrapper>
    </Components.Container>
  );
};

export default MachineCell;
