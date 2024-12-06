import { default as React } from '../../../node_modules/react';
type LinkProps = {
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * The type of link.
     * @default "primary"
     */
    kind?: "primary" | "critical";
    /**
     * The size of link.
     * @default "medium"
     */
    size?: "small" | "medium";
} & Omit<React.HTMLProps<HTMLAnchorElement>, "rel" | "size">;
/**
 * A link component.
 */
export declare const Link: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<LinkProps>, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
export {};
//# sourceMappingURL=Link.d.ts.map