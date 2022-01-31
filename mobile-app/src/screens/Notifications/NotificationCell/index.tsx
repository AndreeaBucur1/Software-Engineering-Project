import React from 'react';
import { Components } from './styled';
import {Notification} from "../../../api/types";

const NotificationCell = ({item}: {item : Notification}) => {
    return (
        <Components.Container>
            <Components.Text>{item.message}</Components.Text>
        </Components.Container>
    );
};

export default NotificationCell;
