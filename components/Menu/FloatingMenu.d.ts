import React, { ComponentPropsWithoutRef, ReactNode } from "react";
interface Props extends ComponentPropsWithoutRef<"div"> {
    /**
     * The menu title.
     */
    title: string;
    /**
     * The CSS class.
     */
    className?: string;
    /**
     * The menu contents.
     */
    children: ReactNode;
}
/**
 * A menu in a floating box, as commonly seen on desktop.
 */
export declare const FloatingMenu: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=FloatingMenu.d.ts.map