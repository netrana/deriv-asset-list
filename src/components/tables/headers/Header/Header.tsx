import React from 'react';
import { ColumnFilter } from '../../XTable/types';

interface Props {
  filter?: ColumnFilter;
  tooltip?: string;
  name: string;
}

const Header = (props: Props) => {
  const { filter, tooltip, name } = props;
  const isCustom = filter?.type === 'CUSTOM';
  return (
    <>
      {filter && isCustom && filter.customRender && filter.customRender()}     
      {!tooltip && !filter && name}
    </>
  );
};

export default Header;
