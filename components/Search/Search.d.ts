import { default as React, ComponentProps } from '../../../node_modules/react';
import { Field } from '../Form';
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
} & Omit<ComponentProps<"input">, "id" | "type">;
/**
 * A standalone search component
 */
export declare const Search: React.ForwardRefExoticComponent<Omit<SearchProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=Search.d.ts.map