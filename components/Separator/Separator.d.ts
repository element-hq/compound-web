import { default as React, ComponentProps } from '../../../node_modules/.pnpm/react@19.2.7/node_modules/react';
import * as RadixSeparator from "@radix-ui/react-separator";
type SeparatorProps = {
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * The spacing on either side of the separator.
     * @default var(--cpd-space-2x)
     */
    spacing?: string;
    /**
     * The style of separator.
     * @default primary
     */
    kind?: "primary" | "secondary" | "section";
} & ComponentProps<typeof RadixSeparator.Root>;
/**
 * A separator component.
 */
export declare const Separator: React.ForwardRefExoticComponent<Omit<SeparatorProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=Separator.d.ts.map