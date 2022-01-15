import { Link } from 'react-router-dom';
import styled from 'styled-components/';
import {Button} from "@mui/material";

export const Components = {
  BigContainer: styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    padding-top: 100px;
    @media (max-width: ${390}px)
    {
      padding-top: 12px;
    }
  `,

  Container: styled.div`
    width: 410px;
    background-color: #FFFFFF;
    border: 1px solid #dfdad8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px 24px;
    border-radius: 12px;
    @media (max-width: ${390}px)
    {
      border: 0;
      height: 570px;
    }
  `,
  Title: styled.h2`
    padding: 32px 0;
    text-align: center;
    color:#3e567c;
  `,

  Label: styled.span`
    color: #3e567c;
  `,

  TextFieldsContainer: styled.div`
    padding: 20px 20px 0 20px;

  `,
  Button: styled(Button)`
    margin-top: 12px;
    text-transform: none !important;
    width: 50%;
    align-self: center;
    &:hover {
      background-color: #FFFFFF;
    }
    height: 40px;
  `,
  ButtonText: styled.h3`
    color: #3e567c;
  `,

  SignUpButton: styled(Link)`
    cursor: pointer;
    padding: 16px 0px;
    text-decoration: none;
    text-align: center;
    color: #3e567c;
  `,

  ErrorText: styled.span``,

  ButtonsContainer: styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${390}px)
  {
    height: 100%;
    justify-content: flex-end;
    
    }
    `
};
