import React, { PropsWithChildren } from "react";
type ButtonProps<C extends React.ElementType> = {
    /**
     * The underlying HTML element to use. Can be a button or a link.
     * @default "button"
     */
    as?: C;
    /**
     * The type of button.
     */
    kind?: "primary" | "secondary" | "tertiary" | "destructive";
    /**
     * The t-shirt size of the button
     */
    size?: "sm" | "lg";
    /**
     * The CSS class name.
     */
    className?: string;
} & React.ComponentPropsWithoutRef<C>;
/**
 * A button component that can be transformed into a link, but keep the button
 * styling using the `as` property.
 */
export declare const Button: <C extends React.ElementType<any> = "button">({ as, kind, size, children, className, ...props }: React.PropsWithChildren<ButtonProps<C>>) => React.ReactElement;
export {};
