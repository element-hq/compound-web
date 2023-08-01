import React, { PropsWithChildren } from "react";
type TypographyProps<C extends React.ElementType> = {
    as?: C;
    type?: "body" | "heading";
    weight?: "regular" | "semibold" | "medium" | "bold";
    size?: "xs" | "sm" | "md" | "lg";
} & React.ComponentPropsWithoutRef<C>;
export declare const Typography: <C extends React.ElementType<any> = "p">({ as, children, type, weight, size, ...restProps }: React.PropsWithChildren<TypographyProps<C>>) => React.ReactElement;
export {};
