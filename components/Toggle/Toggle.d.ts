import React from "react";
/**
 * Standalone toggle component to be used with a Radix form control
 * See https://www.radix-ui.com/docs/primitives/components/form#composing-with-your-own-components
 */
export declare const Toggle: React.ForwardRefExoticComponent<{
    className?: string | undefined;
    onMouseDown?: ((e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void) | undefined;
} & Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLInputElement>>;
