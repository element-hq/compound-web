import React, { PropsWithChildren } from "react";
import { Label as RadixLabel } from "@radix-ui/react-form";
type LabelProps = {
    className?: string;
} & React.ComponentProps<typeof RadixLabel>;
/**
 * Thin wrapper around Radix UI Label component
 * https://www.radix-ui.com/docs/primitives/components/form#label
 */
export declare function Label({ children, ...props }: PropsWithChildren<LabelProps>): JSX.Element;
export {};
