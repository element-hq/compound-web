import React from "react";
import { Root as RadixRoot } from "@radix-ui/react-form";
type RootProps = {
    /**
     * The CSS class name.
     */
    className?: string;
} & React.ComponentProps<typeof RadixRoot>;
/**
 * Thin wrapper around Radix UI Root component
 * https://www.radix-ui.com/docs/primitives/components/form#root
 */
export declare const Root: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<RootProps>, "ref"> & React.RefAttributes<HTMLFormElement>>;
export {};
//# sourceMappingURL=Root.d.ts.map