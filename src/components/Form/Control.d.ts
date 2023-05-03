import React, { PropsWithChildren } from "react";
import { Control as RadixControl } from "@radix-ui/react-form";
type ControlProps = {
    className?: string;
} & React.ComponentProps<typeof RadixControl>;
/**
 * Thin wrapper around Radix UI Control component
 * https://www.radix-ui.com/docs/primitives/components/form#control
 */
export declare function Control({ children, ...props }: PropsWithChildren<ControlProps>): JSX.Element;
export {};
