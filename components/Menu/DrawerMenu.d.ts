import React, { ComponentPropsWithoutRef, ReactNode } from "react";
interface Props extends ComponentPropsWithoutRef<"div"> {
    /**
     * The menu title.
     */
    title: string;
    /**
     * The menu contents.
     */
    children: ReactNode;
}
/**
 * A menu in a drawer, as commonly seen on mobile.
 */
export declare const DrawerMenu: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=DrawerMenu.d.ts.map