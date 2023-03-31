import React, { FC } from "react";
import classNames from "classnames";

import styles from "./sideNavigation.module.scss";

import { Props } from "./types";
import Menu from "antd/lib/menu";


const Sidebar: FC<Props> = (props) => {
  const { menuItems, className = "", selectedTab = "", onClick } = props;

  return (
    <div
      className={classNames({
        [styles.sidebarContainer]: true,
        [className]: Boolean(className),
      })}
    >
      <Menu selectedKeys={[selectedTab]}>
        {/* <Menu.Item disabled>Menu1</Menu.Item> 
        <Menu.Item>Menu2</Menu.Item> 
        <Menu.Item>Menu3</Menu.Item> 
        <Menu.Item>Menu4</Menu.Item>   */}
        {menuItems && menuItems.map((menuItem, index) => (
          <Menu.Item disabled={menuItem.isDisabled} key={menuItem.title}  onClick={() => onClick(menuItem.link)}>
            {menuItem.title}
          </Menu.Item>
          // <div key={index}>
          //   <div
          //     className={classNames({
          //       [styles.title]: true,
          //       [styles.active]: menuItem.title === selectedTab,
          //     })}
          //     onClick={() => onClick(menuItem.link)}
          //   >
          //     {menuItem.title}
          //   </div>
          //   <br />
          // </div>
        ))}
      </Menu>

    </div>
  );
};

export default Sidebar;
