import React, { ComponentProps } from "react";
type ToggleProps = {
    /**
     * The CSS class name.
     */
    className?: string;
} & Omit<ComponentProps<"input">, "type">;
/**
 * A toggle component.
 */
export declare const ToggleInput: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<ToggleProps>, "ref"> & React.RefAttributes<HTMLInputElement>>;
/**
 * A styled checkbox input wrapped in a `Control` component, for use in Radix forms.
 */
export declare const ToggleControl: React.ForwardRefExoticComponent<Omit<Omit<React.PropsWithChildren<ToggleProps>, "ref"> & React.RefAttributes<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=Toggle.d.ts.map