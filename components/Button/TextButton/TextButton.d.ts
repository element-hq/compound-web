import { default as React } from '../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { Size } from '../../../utils/size';
import { UnstyledButtonPropsFor } from '../UnstyledButton';
/**
 * A button that looks like a link.
 */
export declare const TextButton: React.ForwardRefExoticComponent<{
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * The color variant of the text button.
     * @default "primary"
     */
    kind?: "primary" | "critical";
    /**
     * The t-shirt size of the text button.
     * @default "md"
     */
    size?: Size & ("sm" | "md");
} & Omit<UnstyledButtonPropsFor<"button">, "ref"> & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=TextButton.d.ts.map