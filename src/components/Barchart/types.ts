export interface Props {
  data: Data[];
  xField: string;
  yField: string;
  xFieldAlias?: string;
  yFieldAlias?: string;
}

type Data = {
  [key: string]: string | number;
};