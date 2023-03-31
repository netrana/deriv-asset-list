import { ReactNode } from "react";

export interface Props {
    image?: string;
    headerTitle?: ReactNode;
    headerActions?: ReactNode;
    metaTitle?: ReactNode;
    metaDescription?: ReactNode;
    footer?: ReactNode
    isBordered?: boolean;
    isHoverable?: boolean;
    cssClassNames?: string;
    isLoading?: boolean;
    hasPadding?:boolean;
    onClick?:()=>void;
}