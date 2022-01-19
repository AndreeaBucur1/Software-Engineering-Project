import styled from 'styled-components';

export const Components = {
  Container: styled.div`
    width: 100%;
    padding-bottom: 24px;
  `,
  FieldWrapper: styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    border: 1px solid #dfdad8;
    border-radius: 8px;
  `,

  InputText: styled.input<{
    hasRightComponent: boolean;
  }>`
    flex: 1;
    height: 48px;
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
      border-radius: 8px;
      border: 1px solid #5d7da3;
      height: 48px;
    }
    border: 1px solid #dfdad8;
    border-radius: 8px;


  `,

  IconContainer: styled.div`
    position: absolute;
    right: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  `,
};
