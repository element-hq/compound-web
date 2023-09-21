import React from "react";
/**
 * A radio component.
 */
export declare const Radio: React.ForwardRefExoticComponent<{
    /**
     * The type of radio.
     */
    kind?: "primary" | "critical" | undefined;
    /**
     * The CSS class name.
     */
    className?: string | undefined;
    /**
     * On mouse down callback for the radio.
     */
    onMouseDown?: ((e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void) | undefined;
} & Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Radio.d.ts.map