import React, { ChangeEvent, useEffect, useState } from 'react';
import { Components } from './styled';
import { ReactComponent as IconShow } from '../../assets/icons/icon-show.svg';
import { ReactComponent as IconHide } from '../../assets/icons/icon-hide.svg';

const TextField = ({
  type,
  value,
  onChangeText,
}: {
  type?: string;
  value: string | undefined;
  onChangeText?: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [inputFieldType, setInputFieldType] = useState(type);
  const [SVGIConComponent, setSVGIConComponent] = useState<any>();

  const _onChangeText = (e: ChangeEvent<HTMLInputElement>): void => {
    onChangeText?.(e);
  };

  const togglePasswordView = () => {
    inputFieldType === 'text' ? setInputFieldType('password') : setInputFieldType('text');
  };

  const onIconPress = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    switch (type) {
      case 'password':
        togglePasswordView();
        break;
    }
  };


  useEffect(() => {
    switch (type) {
      case 'password':
        inputFieldType === 'password' ? setSVGIConComponent(IconShow) : setSVGIConComponent(IconHide);
        break;
    }
  }, [type, inputFieldType]);

  return (
    <Components.Container >
      <Components.FieldWrapper>
        <Components.InputText
          autoCapitalize={'none'}
          value={value}
          onChange={_onChangeText}
          type={inputFieldType}
          hasRightComponent={false}
        />

        {SVGIConComponent && (
          <Components.IconContainer onClick={onIconPress}>
            <SVGIConComponent />
          </Components.IconContainer>
        )}
      </Components.FieldWrapper>
    </Components.Container>
  );
};

export default TextField;
