import React from "react";
type LinkProps = {
    className?: string;
    kind?: "primary" | "critical";
} & Omit<React.HTMLProps<HTMLAnchorElement>, "rel">;
export declare const Link: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<LinkProps>, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
export {};
