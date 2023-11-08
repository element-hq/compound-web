import React from "react";
import { Typography } from "./Typography";
type TypographyProps = React.ComponentProps<typeof Typography>;
/**
 * A text component. Underlying HTML element can be changed using the `as`
 * property. Will default to be a paragraph.
 */
export declare const Text: React.FC<Omit<TypographyProps, "type"> & {
    size?: Exclude<TypographyProps["size"], "xl">;
}>;
export {};
//# sourceMappingURL=Text.d.ts.map