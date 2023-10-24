import React from "react";
type MFAProps = {
    className?: string;
    length?: number;
    disabled?: boolean;
} & Omit<React.ComponentProps<"input">, "type" | "inputMode" | "pattern" | "autoComplete">;
export declare const MFAInput: React.ForwardRefExoticComponent<Omit<MFAProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export declare const MFAControl: React.ForwardRefExoticComponent<Omit<Omit<MFAProps, "ref"> & React.RefAttributes<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=MFA.d.ts.map