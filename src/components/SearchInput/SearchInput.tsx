import React, { FC } from 'react';
import { Input, Space } from 'antd';

import {Props} from './types';

const { Search } = Input;


const SearchInput: FC<Props> = (props) => {

  const { className = '', onSearch  } = props

  return (
    <Space direction="vertical">
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        style={{ width: 200, padding: '0 1rem .5rem 0' }}
        allowClear
      />
    </Space>
  );
};
export default SearchInput;
