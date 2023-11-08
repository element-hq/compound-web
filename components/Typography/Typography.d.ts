import React, { PropsWithChildren } from "react";
type TypographyProps<C extends React.ElementType> = {
    /**
     * The HTML tag.
     * @default "p"
     */
    as?: C;
    /**
     * The type of content.
     */
    type?: "body" | "heading";
    /**
     * The font weight.
     */
    weight?: "regular" | "semibold" | "medium" | "bold";
    /**
     * The t-shirt size of the content.
     */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /**
     * The CSS class name.
     */
    className?: string;
} & React.ComponentPropsWithoutRef<C>;
export declare const Typography: <C extends React.ElementType<any> = "p">({ as, children, type, weight, size, className, ...restProps }: React.PropsWithChildren<TypographyProps<C>>) => React.ReactElement;
export {};
//# sourceMappingURL=Typography.d.ts.map