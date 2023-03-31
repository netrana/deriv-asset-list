import { Moment } from 'moment';
export interface Props {
  title?: string;
  placeholder?: string;
  isBordered?: boolean;
  className?: string;
  format?: string;
  value?: Moment | null;
  handleDateChange: (value: Moment | null, dateString: string) => void;
}
