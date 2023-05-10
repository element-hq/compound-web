import React, { PropsWithChildren } from "react";
import { Control } from "../Form";
type ActionControlProps = {
    className?: string;
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    onActionClick: (e: React.MouseEvent) => void;
    actionLabel: string;
    disabled?: boolean;
} & React.ComponentProps<typeof Control>;
export declare const ActionControl: ({ children, Icon, className, actionLabel, onActionClick, ...props }: PropsWithChildren<ActionControlProps>) => React.JSX.Element;
export declare const StandaloneActionControl: (props: PropsWithChildren<ActionControlProps>) => JSX.Element;
export {};
