export interface Props {
    title: string;
    cardImage?: string;
    rating?: number;
    tripCount?: number;
    perDayCost?: number;
    isNew?: boolean;
    className?: string;
    onClick?:()=>void;
  }