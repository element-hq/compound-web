import React, { ComponentPropsWithoutRef, ReactNode } from "react";
interface Props extends ComponentPropsWithoutRef<"div"> {
    /**
     * The child component.
     */
    children: ReactNode;
    /**
     * The CSS class.
     */
    className?: string;
}
/**
 * Adds a border of glass around a child component.
 */
export declare const Glass: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=Glass.d.ts.map