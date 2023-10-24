import React from "react";
import { TextInput } from "../Text";
type Props = {
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
} & React.ComponentProps<typeof TextInput>;
/**
 * A generic input with an action icon on the right hand side.
 * You should rarely use it directly,
 * but it is powering the likes of "copy to clipboard input", "password reveal", ...
 */
export declare const ActionInput: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLInputElement>>;
/**
 * A styled text input wrapped in a `Control` component, for use in Radix forms.
 */
export declare const ActionControl: React.ForwardRefExoticComponent<Omit<Omit<Props, "ref"> & React.RefAttributes<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=Action.d.ts.map