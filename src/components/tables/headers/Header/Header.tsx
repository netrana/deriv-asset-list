import React from 'react';
import { Props } from './types';
import { Title } from 'components/helpers';

const Header = (props: Props) => {
  const { name } = props;
  return (
    <Title level={5}> 
      {name}
    </Title>
  );
};

export default Header;
