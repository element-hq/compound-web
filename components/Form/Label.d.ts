import React from "react";
import { Label as RadixLabel } from "@radix-ui/react-form";
type LabelProps = {
    /**
     * The CSS class name.
     */
    className?: string;
} & React.ComponentProps<typeof RadixLabel>;
/**
 * Thin wrapper around Radix UI Label component
 * https://www.radix-ui.com/docs/primitives/components/form#label
 */
export declare const Label: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<LabelProps>, "ref"> & React.RefAttributes<HTMLLabelElement>>;
export {};
//# sourceMappingURL=Label.d.ts.map