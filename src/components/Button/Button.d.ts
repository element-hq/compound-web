import React, { PropsWithChildren } from "react";
type ButtonProps<C extends React.ElementType> = {
    as?: C;
    kind?: "primary" | "secondary" | "tertiary" | "destructive";
    size?: "sm" | "lg";
    className?: string;
} & React.ComponentPropsWithoutRef<C>;
export declare const Button: <C extends React.ElementType<any> = "button">({ as, kind, size, children, className, ...props }: React.PropsWithChildren<ButtonProps<C>>) => React.JSX.Element;
export {};
