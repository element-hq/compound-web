import React from "react";
import { Control } from "../../Control";
type MFAProps = {
    className?: string;
    length?: number;
    value?: string;
    disabled?: boolean;
} & React.ComponentProps<typeof Control>;
/**
 * Thin wrapper around Radix UI Control component
 * https://www.radix-ui.com/docs/primitives/components/form#control
 */
export declare const MFAControl: React.ForwardRefExoticComponent<Omit<MFAProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=MFA.d.ts.map