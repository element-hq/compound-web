import React from "react";
import { Typography } from "./Typography";
export declare const Heading: ({ as, children, ...props }: Omit<React.ComponentProps<typeof Typography>, "type">) => React.JSX.Element;
type HeadingProps = Omit<React.ComponentProps<typeof Heading>, "as" | "weight" | "size">;
export declare const H1: ({ children, ...props }: HeadingProps) => React.JSX.Element;
export declare const H2: ({ children, ...props }: HeadingProps) => React.JSX.Element;
export declare const H3: ({ children, ...props }: HeadingProps) => React.JSX.Element;
export declare const H4: ({ children, ...props }: HeadingProps) => React.JSX.Element;
export declare const H5: ({ children, ...props }: HeadingProps) => React.JSX.Element;
export declare const H6: ({ children, ...props }: HeadingProps) => React.JSX.Element;
export {};
//# sourceMappingURL=Heading.d.ts.map