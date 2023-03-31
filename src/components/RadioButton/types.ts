import { RadioChangeEvent } from "antd";

type Option = {
  label: string;
  value: string;
};
export interface Props {
  title?: string;
  options: Option[];
  value?: string;
  className?: string;
  onChange?: (e: RadioChangeEvent) => void;
  defaultValue?: string;
  disabled?: boolean;
}
