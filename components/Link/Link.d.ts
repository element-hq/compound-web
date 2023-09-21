import React from "react";
type LinkProps = {
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * The type of link.
     */
    kind?: "primary" | "critical";
} & Omit<React.HTMLProps<HTMLAnchorElement>, "rel">;
/**
 * A link component.
 */
export declare const Link: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<LinkProps>, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
export {};
//# sourceMappingURL=Link.d.ts.map