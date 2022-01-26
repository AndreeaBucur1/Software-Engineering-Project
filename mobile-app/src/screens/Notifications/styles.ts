import styled from 'styled-components/';
import {Button} from "@mui/material";

export const Components = {
  Container: styled.div`
    padding: 24px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
   
  `,

  NavBar: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
  `,

  Title: styled.h3`
    color: #3e567c;
  `,

  LogoutButton: styled.span`
    color: #3e567c;
    align-self: center`,

  Button: styled(Button)`
    margin-top: -24px;
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
