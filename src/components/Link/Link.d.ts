import { default as React } from '../../../../node_modules/react';
import { Size } from '../../utils/size';
type LinkProps = {
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * The color variant of the link.
     * @default "primary"
     */
    kind?: "primary" | "critical";
    /**
     * The t-shirt size of the link.
     * @default "md"
     */
    size?: Size & ("sm" | "md");
} & Omit<React.HTMLProps<HTMLAnchorElement>, "rel" | "size">;
/**
 * A link component.
 */
export declare const Link: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<LinkProps>, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
export {};
//# sourceMappingURL=Link.d.ts.map