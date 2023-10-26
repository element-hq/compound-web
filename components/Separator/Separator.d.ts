import * as RadixSeparator from "@radix-ui/react-separator";
import React, { ComponentProps } from "react";
type SeparatorProps = {
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * The spacing on either side of the separator
     */
    spacing?: string;
} & ComponentProps<typeof RadixSeparator.Root>;
/**
 * A separator component
 * Note: Only supports `React.RefObject`
 */
export declare const Separator: React.ForwardRefExoticComponent<Omit<SeparatorProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=Separator.d.ts.map