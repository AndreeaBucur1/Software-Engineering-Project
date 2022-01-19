import React from 'react';
import { Components } from './styled';

const ActivityIndicatorScreenView = () => {
  return (
    <Components.Container>
      <Components.CircularProgress size={32} />
    </Components.Container>
  );
};

export default ActivityIndicatorScreenView;
