export interface LabeledValue {
  label: React.ReactNode;
  onClick: () => void;
  btnType?: string;
  icon?: JSX.Element;
}

export interface Props {
  useHook: Function;
  buttons: LabeledValue[];
}
