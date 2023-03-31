import { InputProps } from "antd";

export interface Props extends InputProps {
  onSearch: (value: string) => void;
}
