import styled from "styled-components";
import { CircularProgress } from "@mui/material";
import { Button } from "@mui/material";

export const Components = {
  Container: styled.div`
    padding: 48px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  Image: styled.img`
    width: 250px;
    height: 250px;
  `,

  Title: styled.h2`
    color: #3e567c;
    text-align: center;
  `,

  InputText: styled.input`
    height: 32px;
    color: #000000;
    padding-left: 16px;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: #b3b3b3;
    }
    :-ms-input-placeholder {
      color: #b3b3b3;
    }
    &:focus {
      outline: none;
      border-radius: 4px;
      border: 1px solid #5d7da3;
      height: 32px;
    }
    border: 1px solid #dfdad8;
    border-radius: 4px;
  `,

  DataContainer: styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  `,
  DataRow: styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-end; ;
  `,
  Wrapper: styled.div`
    padding: 16px;
    align-items: center;
  `,

  Button: styled(Button)`
    margin: 16px !important;
    text-transform: none !important;
    height: 36px;
    padding: 16px 16px;
    background-color: white;
    &:hover {
      background-color: white !important;
    }
    border: 1px solid #3e567c !important;
  `,
  ButtonText: styled.h3`
    color: #3e567c;
  `,

  StartContainer: styled.div`
    padding: 16px;
  `,
  ErrorText: styled.span``,

  LoaderContainer: styled.div`
    display: flex;
    flex: 1;
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    z-index: 99999;
  `,
  CircularProgress: styled(CircularProgress)`
    color: #5d7da3;
  `,
};
