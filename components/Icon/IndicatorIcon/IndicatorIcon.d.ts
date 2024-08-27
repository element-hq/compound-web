import { default as React } from '../../../../node_modules/react';
type IconButtonProps = {
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * The icon size in CSS units, e.g. `"24px"`.
     * @default 100%
     */
    size?: CSSStyleDeclaration["height"];
    /**
     * The icon colour.
     */
    colour?: string;
    /**
     * The indicator dot displayed on the top right
     * Names based on the colours used for the dot, or undefined for no dot.
     */
    indicator?: "default" | "success" | "critical";
};
export declare const IndicatorIcon: React.ForwardRefExoticComponent<IconButtonProps & {
    children?: React.ReactNode | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=IndicatorIcon.d.ts.map