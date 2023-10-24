import React, { ComponentProps } from "react";
type TextProps = {
    /**
     * The CSS class name.
     */
    className?: string;
} & ComponentProps<"input">;
/**
 * A styled text input, for standalone use.
 */
export declare const TextInput: React.ForwardRefExoticComponent<Omit<TextProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
/**
 * A styled text input wrapped in a `Control` component, for use in Radix forms.
 */
export declare const TextControl: React.ForwardRefExoticComponent<Omit<Omit<TextProps, "ref"> & React.RefAttributes<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=Text.d.ts.map