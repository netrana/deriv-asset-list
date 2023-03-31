import { InputProps } from 'antd';

export interface Props extends InputProps {
  label?: string;
  inputType?: 'password' | 'text';
  iconRender?: any;
  visibilityToggle?: boolean;
}
