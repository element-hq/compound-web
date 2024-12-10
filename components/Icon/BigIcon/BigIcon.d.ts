import { JSX, PropsWithChildren } from '../../../../node_modules/react';
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
     * Whether this button triggers a destructive action.
     * @default false
     */
    destructive?: boolean;
    /**
     * Whether this button triggers a success action.
     * @default false
     */
    success?: boolean;
}
export declare function BigIcon({ className, size, destructive, success, children, }: PropsWithChildren<BigIconProps>): JSX.Element;
export {};
//# sourceMappingURL=BigIcon.d.ts.map