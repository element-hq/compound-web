import React from "react";
import { Field } from "../Form";
type SearchProps = {
    /**
     * The CSS class name
     */
    className?: string;
    /**
     * The input placeholder.
     * @default "Search…"
     */
    placeholder?: string;
    /**
     * The field name.
     */
    name: React.ComponentProps<typeof Field>["name"];
    /**
     * Event handler called when the search changes.
     */
    onChange?: (e: React.ChangeEvent) => void;
};
/**
 * A standalone search component
 */
export declare const Search: ({ className, onChange, placeholder, name, }: SearchProps) => JSX.Element;
export {};
//# sourceMappingURL=Search.d.ts.map