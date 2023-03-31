import { TooltipPlacement } from "antd/lib/tooltip";

export interface Props{
    content: JSX.Element;
    placement?: TooltipPlacement;
    trigger?: string; 
}