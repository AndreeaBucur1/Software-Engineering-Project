import React from 'react';
import { Components } from './styled';
import {Machine} from "../../../api/types";

const MachineCell = ({item}: {item : Machine}) => {
    return (
        <Components.Container>
            <Components.Text>Id :{item.id}</Components.Text>
            <Components.Button>
                <Components.ButtonText>{'START MACHINE'}</Components.ButtonText>
            </Components.Button>
        </Components.Container>
    );
};

export default MachineCell;
