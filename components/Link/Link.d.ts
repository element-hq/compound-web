import React, { PropsWithChildren } from "react";
type LinkProps = {
    className?: string;
    kind?: "primary" | "critical";
} & Omit<React.HTMLProps<HTMLAnchorElement>, "rel">;
export declare const Link: React.FC<PropsWithChildren<LinkProps>>;
export {};
