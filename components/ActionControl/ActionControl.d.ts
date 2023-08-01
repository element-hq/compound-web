import React, { PropsWithChildren } from "react";
import { Control } from "../Form";
type ActionControlProps = {
    className?: string;
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    onActionClick: (e: React.MouseEvent) => void;
    actionLabel: string;
    disabled?: boolean;
} & React.ComponentProps<typeof Control>;
export declare const ActionControl: React.FC<PropsWithChildren<ActionControlProps>>;
export declare const StandaloneActionControl: React.FC<PropsWithChildren<ActionControlProps>>;
export {};
