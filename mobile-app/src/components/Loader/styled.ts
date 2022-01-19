import styled from 'styled-components';
import { CircularProgress } from '@mui/material';

export const Components = {
  Container: styled.div`
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
    background-color: #cccccc;
    z-index: 99999;
  `,
  CircularProgress: styled(CircularProgress)`
    color: #5d7da3;
  `,
};
