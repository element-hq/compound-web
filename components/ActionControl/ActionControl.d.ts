import React from "react";
import { Control } from "../Form";
type ActionControlProps = {
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * The React component to display on the right hand side of the icon.
     */
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    /**
     * On click callback for the icon on the right hand side
     */
    onActionClick: (e: React.MouseEvent) => void;
    /**
     * The name of the action to perform (e.g. "Copy to clipboard")
     */
    actionLabel: string;
    disabled?: boolean;
} & React.ComponentProps<typeof Control>;
/**
 * A generic input with an action icon on the right hand side.
 * You should rarely use it directly,
 * but it is powering the likes of "copy to clipboard input", "password reveal", ...
 */
export declare const ActionControl: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<ActionControlProps>, "ref"> & React.RefAttributes<HTMLInputElement>>;
export declare const StandaloneActionControl: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<ActionControlProps>, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
