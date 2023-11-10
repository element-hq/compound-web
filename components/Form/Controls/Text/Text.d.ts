import React, { ComponentProps } from "react";
type TextProps = {
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * Enable contextual alternate ligatures on input text
     * For example on an in-place editing field
     * https://github.com/rsms/inter/issues/222
     * https://github.com/rsms/inter/blob/master/src/features/calt.fea
     */
    enableLigatures?: boolean;
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