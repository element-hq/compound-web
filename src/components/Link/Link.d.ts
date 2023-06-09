import React, { PropsWithChildren } from "react";
type LinkProps = {
    className?: string;
    kind?: "primary" | "critical";
} & Omit<React.HTMLProps<HTMLAnchorElement>, "rel">;
export declare const Link: ({ children, className, kind, ...props }: PropsWithChildren<LinkProps>) => React.JSX.Element;
export {};
//# sourceMappingURL=Link.d.ts.map