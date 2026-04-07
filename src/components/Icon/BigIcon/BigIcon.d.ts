import { JSX, PropsWithChildren } from '../../../../../node_modules/react';
interface BigIconProps {
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * The size of the icon.
     * @default "large"
     */
    size?: "small" | "medium" | "large";
    /**
     * The color variant of the icon.
     * @default "primary"
     */
    kind?: "primary" | "critical" | "success";
}
export declare function BigIcon({ className, size, kind, children, }: PropsWithChildren<BigIconProps>): JSX.Element;
export {};
//# sourceMappingURL=BigIcon.d.ts.map