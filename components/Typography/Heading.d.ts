import React from "react";
import { Typography } from "./Typography";
type TypographyProps = React.ComponentProps<typeof Typography>;
/**
 * A heading component.
 */
export declare const Heading: React.FC<Omit<TypographyProps, "type"> & {
    size?: Exclude<TypographyProps["size"], "xs">;
}>;
type HeadingProps = Omit<React.ComponentProps<typeof Heading>, "as" | "weight" | "size">;
/**
 * A Heading level-1 styled component. Underlying HTML element can be changed
 * usign the `as` property.
 */
export declare const H1: React.FC<HeadingProps>;
/**
 * A Heading level-2 styled component. Underlying HTML element can be changed
 * usign the `as` property.
 */
export declare const H2: React.FC<HeadingProps>;
/**
 * A Heading level-3 styled component. Underlying HTML element can be changed
 * usign the `as` property.
 */
export declare const H3: React.FC<HeadingProps>;
/**
 * A Heading level-4 styled component. Underlying HTML element can be changed
 * usign the `as` property.
 */
export declare const H4: React.FC<HeadingProps>;
/**
 * A Heading level-5 styled component. Underlying HTML element can be changed
 * usign the `as` property.
 */
export declare const H5: React.FC<HeadingProps>;
/**
 * A Heading level-6 styled component. Underlying HTML element can be changed
 * usign the `as` property.
 */
export declare const H6: React.FC<HeadingProps>;
export {};
//# sourceMappingURL=Heading.d.ts.map