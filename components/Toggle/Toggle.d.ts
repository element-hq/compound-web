import React from "react";
/**
 * A toggle component.
 */
export declare const Toggle: React.ForwardRefExoticComponent<{
    /**
     * The CSS class name.
     */
    className?: string | undefined;
    /**
     * On mouse down callback for the toggle.
     */
    onMouseDown?: ((e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void) | undefined;
} & Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Toggle.d.ts.map