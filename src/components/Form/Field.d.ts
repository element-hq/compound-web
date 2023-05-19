import React, { PropsWithChildren } from "react";
import { Field as RadixField } from "@radix-ui/react-form";
type FieldProps = {
    className?: string;
} & React.ComponentProps<typeof RadixField>;
/**
 * Thin wrapper around Radix UI Field component
 * https://www.radix-ui.com/docs/primitives/components/form#field
 */
export declare function Field({ children, ...props }: PropsWithChildren<FieldProps>): React.JSX.Element;
export {};
