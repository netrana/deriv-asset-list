export interface Props {
  className?:string;
// TODO: we couldn't find type for this, when found put proper type
  onChange: (value:any, dateString:any) => void
}
