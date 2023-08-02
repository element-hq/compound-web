import React from "react";
import { Control } from "../Form";
type ActionControlProps = {
    className?: string;
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    onActionClick: (e: React.MouseEvent) => void;
    actionLabel: string;
    disabled?: boolean;
} & React.ComponentProps<typeof Control>;
export declare const ActionControl: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<ActionControlProps>, "ref"> & React.RefAttributes<HTMLInputElement>>;
export declare const StandaloneActionControl: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<ActionControlProps>, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
