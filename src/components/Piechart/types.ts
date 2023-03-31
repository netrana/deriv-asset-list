export interface Props {
  data: Data[];
  angleField: string;
  colorField: string;
  color?: string[]
}

type Data = {
  [key: string]: string | number;
};
