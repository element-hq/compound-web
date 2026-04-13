import { default as React, ComponentType, PropsWithChildren } from '../../../node_modules/react';
type BadgeProps = {
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * The type of badge.
     */
    kind?: "default" | "grey" | "on-solid" | "blue" | "green" | "red";
    /**
     * An icon to display within the badge.
     */
    Icon?: ComponentType<React.SVGAttributes<SVGElement>>;
};
/**
 * A Badge component.
 */
export declare const Badge: React.FC<PropsWithChildren<BadgeProps>>;
export {};
//# sourceMappingURL=Badge.d.ts.map