import React from "react";
/**
 * A checkbox component.
 */
export declare const Checkbox: React.ForwardRefExoticComponent<{
    /**
     * The type of checkbox.
     */
    kind?: "primary" | "critical" | undefined;
    /**
     * The CSS class name.
     */
    className?: string | undefined;
    /**
     * On mouse down callback for the checkbox.
     */
    onMouseDown?: ((e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void) | undefined;
} & Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLInputElement>>;
