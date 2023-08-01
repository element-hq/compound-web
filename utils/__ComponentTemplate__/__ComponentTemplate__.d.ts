import React, { PropsWithChildren } from "react";
type __ComponentTemplate__Props<C extends React.ElementType> = {
    as?: C;
    className?: string;
} & React.ComponentPropsWithoutRef<C>;
export declare const __ComponentTemplate__: <C extends React.ElementType<any> = "p">({ as, children, className, ...props }: React.PropsWithChildren<__ComponentTemplate__Props<C>>) => React.JSX.Element;
export {};
