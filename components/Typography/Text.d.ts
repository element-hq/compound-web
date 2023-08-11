import React from "react";
import { Typography } from "./Typography";
/**
 * A text component. Underlying HTML element can be changed using the `as`
 * property. Will default to be a paragraph.
 */
export declare const Text: React.FC<Omit<React.ComponentProps<typeof Typography>, "type">>;
