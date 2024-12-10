import { default as React, AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEventHandler } from '../../../node_modules/react';
type NavItemProps = {
    active?: boolean;
    "aria-controls"?: string;
};
type NavItemLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "style" | "className"> & {
    href: string;
} & NavItemProps;
type NavItemButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style" | "className"> & {
    onClick: MouseEventHandler<HTMLButtonElement>;
} & NavItemProps;
/**
 * A navigation item component to be used with a navigation bar.
 * Will render an anchor when href is provided, otherwise a button element.
 */
export declare const NavItem: React.ForwardRefExoticComponent<React.PropsWithChildren<NavItemLinkProps | NavItemButtonProps> & React.RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=NavItem.d.ts.map