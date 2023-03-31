import React, { FC } from 'react';
import { Menu, Dropdown, Button, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import styles from './dropdown.module.scss';
import { Props } from './types';

const menu = (
  <Menu>
    <Menu.Item key="1">Active</Menu.Item>
    <Menu.Item key="2">Inactive</Menu.Item>
  </Menu>
);

const DropdownInput: FC<Props> = (props) => {
  const { title } = props;
  return (
    <Space wrap className={styles.dropdownContainer}>
      {/* TODO: change it to antd Select */}
      <Dropdown overlay={menu}>
        <Button>
          {title} <DownOutlined />
        </Button>
      </Dropdown>
    </Space>
  );
};
export default DropdownInput;
