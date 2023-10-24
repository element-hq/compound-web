import React, { ComponentProps } from "react";
import { ActionInput } from "../Action";
type Props = Omit<ComponentProps<typeof ActionInput>, "type" | "actionLabel" | "onActionClick" | "Icon">;
/**
 * A password input with a toggle to show/hide the password.
 *
 * Standalone input to be used outside of Radix forms.
 */
export declare const PasswordInput: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLInputElement>>;
/**
 * A password input with a toggle to show/hide the password.
 *
 * Control to be used in a Radix form.
 */
export declare const PasswordControl: React.ForwardRefExoticComponent<Omit<Omit<Props, "ref"> & React.RefAttributes<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=Password.d.ts.map