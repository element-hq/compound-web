import { default as React, PropsWithChildren } from '../../../node_modules/react';

type BadgeProps = {
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * The type of badge.
     */
    kind?: "default" | "success" | "critical";
};
/**
 * A Badge component.
 */
export declare const Badge: React.FC<PropsWithChildren<BadgeProps>>;
export {};
//# sourceMappingURL=Badge.d.ts.map