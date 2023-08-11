import React from "react";
import { Control as RadixControl } from "@radix-ui/react-form";
type ControlProps = {
    /**
     * The CSS class name.
     */
    className?: string;
} & React.ComponentProps<typeof RadixControl>;
/**
 * Thin wrapper around Radix UI Control component
 * https://www.radix-ui.com/docs/primitives/components/form#control
 */
export declare const Control: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<ControlProps>, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
