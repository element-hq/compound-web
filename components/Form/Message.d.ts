import React from "react";
import { Message } from "@radix-ui/react-form";
type MessageProps = {
    /**
     * The CSS class name.
     */
    className?: string;
} & React.ComponentProps<typeof Message>;
/**
 * An error message to display below a form control.
 */
export declare const ErrorMessage: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<MessageProps>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
/**
 * A help message to display below a form control.
 */
export declare const HelpMessage: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<MessageProps>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
export {};
//# sourceMappingURL=Message.d.ts.map