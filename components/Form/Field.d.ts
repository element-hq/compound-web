import React from "react";
import { Field as RadixField } from "@radix-ui/react-form";
type FieldProps = {
    /**
     * The CSS class name.
     */
    className?: string;
} & React.ComponentProps<typeof RadixField>;
/**
 * Thin wrapper around Radix UI Field component
 * https://www.radix-ui.com/docs/primitives/components/form#field
 */
export declare const Field: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<FieldProps>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=Field.d.ts.map