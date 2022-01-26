import styled from 'styled-components/';
import {Button} from "@mui/material";

export const Components = {
    Container: styled.div`
    padding: 24px;
    display: flex;
    flex-direction: row;
    gap: 16px;
    width:70%;
    align-self: center;
    align-items:center;
    justify-content:center;
    border: 1px solid #dfdad8;
  `,

    Text: styled.span`
    text-align: center;
    `,

    Button: styled(Button)`
    margin-top: 12px;
    text-transform: none !important;
    align-self: center;
    &:hover {
      background-color: #88a0c3;
    }
    height: 40px;
    padding: 8px 16px;
    background-color: #88a0c3;
  `,
    ButtonText: styled.h6`
    color: #FFFFFF;
  `,
};
