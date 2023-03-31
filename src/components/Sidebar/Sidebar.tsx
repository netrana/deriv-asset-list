import React, { FC, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import styles from './sidebar.module.scss';

import { Props } from './types';

const { Sider } = Layout;

const Sidebar: FC<Props> = (props) => {
  const { menuItems, className = '' } = props;

  const location = useLocation();

  const [selectedTab, setSelectedTab] = React.useState('0');

  useEffect(() => {
    setSelectedTab(
      menuItems
        .findIndex((item) =>
          location.pathname.includes(!!item.parentRoute ? item.parentRoute : item.link),
        )
        .toString(),
    );
  }, [location.pathname]);

  return (
    <Sider   
      width={210}   
      breakpoint="xs"
      collapsedWidth="0"
      className={classNames({
        [styles.sidebarContainer]: true,
        [className]: Boolean(className),
      })}
    >
      <Menu className={styles.sidebarMenus} mode="inline" selectedKeys={[selectedTab]}>
        {menuItems.map((menuItem, index) => (
          <Menu.Item key={index} icon={menuItem.icon}>
            {menuItem.title}
            <Link to={menuItem.link} />
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
