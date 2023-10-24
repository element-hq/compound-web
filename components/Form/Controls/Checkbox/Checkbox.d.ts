import React, { ComponentProps } from "react";
type Props = {
    /**
     * The CSS class name.
     */
    className?: string;
} & Omit<ComponentProps<"input">, "type">;
/**
 * A styled checkbox input, for standalone use.
 */
export declare const CheckboxInput: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLInputElement>>;
/**
 * A styled checkbox input wrapped in a `Control` component, for use in Radix forms.
 */
export declare const CheckboxControl: React.ForwardRefExoticComponent<Omit<Omit<Props, "ref"> & React.RefAttributes<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=Checkbox.d.ts.map