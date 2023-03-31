import { ProgressProps } from 'antd/lib/progress';
import { TagProps } from 'antd/lib/tag';

export interface HealthTagProps {
  name?: string;
  color?: TagProps['color'];
  linkTo?: string;
}
export interface HealthGroupProps {
  name: string;
  tags: HealthTagProps[];
}
export interface HealthTagsProps {
  tags?: HealthTagProps[];
  groups?: HealthGroupProps[];
}

export interface Props extends HealthTagsProps {
  progressPercent?: number;
  progressStatus?: ProgressProps['status'];
}
