type MenuItem = {
  title: string;
  icon: JSX.Element;
  link: string;
  className?: string;
  parentRoute?: string;
};

export interface Props {
  menuItems: MenuItem[];
  className?: string;
}
