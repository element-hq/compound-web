import React, { ComponentPropsWithoutRef } from "react";
import { Button } from "../Button/Button";
type SubmitProps = Omit<ComponentPropsWithoutRef<typeof Button>, "submit" | "as">;
/**
 * A stylised submit button for forms.
 */
export declare const Submit: React.ForwardRefExoticComponent<SubmitProps & React.RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=Submit.d.ts.map