import React, { PropsWithChildren } from "react";
import { Root as RadixRoot } from "@radix-ui/react-form";
type RootProps = {
    className?: string;
} & React.ComponentProps<typeof RadixRoot>;
/**
 * Thin wrapper around Radix UI Root component
 * https://www.radix-ui.com/docs/primitives/components/form#root
 */
export declare const Root: React.FC<PropsWithChildren<RootProps>>;
export {};
