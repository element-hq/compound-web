import { default as React, ComponentPropsWithoutRef } from '../../../node_modules/react';
import { Button } from '../Button/Button';
type SubmitProps = Omit<ComponentPropsWithoutRef<typeof Button>, "submit" | "as">;
/**
 * A stylised submit button for forms.
 */
export declare const Submit: React.ForwardRefExoticComponent<SubmitProps & React.RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=Submit.d.ts.map