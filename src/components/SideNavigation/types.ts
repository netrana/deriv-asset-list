export type NavigationMenuItem = {
  title: string;
  link: string;
  routeName?: string;
  isDisabled?: boolean;
};

export interface Props {
  menuItems?: NavigationMenuItem[];
  className?: string;
  selectedTab?: string;
  onClick: (link: string)=> void;
}
