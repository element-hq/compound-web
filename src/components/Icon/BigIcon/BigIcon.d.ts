import { JSX, PropsWithChildren } from '../../../../../node_modules/react';
import { Size } from '../../../utils/size';
interface BigIconProps {
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * The t-shirt size of the icon.
     * @default "lg"
     */
    size?: Size & ("sm" | "md" | "lg");
    /**
     * The color variant of the icon.
     * @default "primary"
     */
    kind?: "primary" | "critical" | "success";
}
export declare function BigIcon({ className, size, kind, children, }: PropsWithChildren<BigIconProps>): JSX.Element;
export {};
//# sourceMappingURL=BigIcon.d.ts.map