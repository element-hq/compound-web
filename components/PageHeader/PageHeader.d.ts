import { default as React, ComponentType, ReactNode, SVGAttributes } from '../../../node_modules/react';
export declare const PageHeader: React.ForwardRefExoticComponent<{
    Icon: ComponentType<SVGAttributes<SVGElement>>;
    /**
     * The heading text.
     */
    heading: string;
    /**
     * The t-shirt size of the header.
     * @default "lg"
     */
    size?: "md" | "lg";
    /**
     * The contents of the header. At a minimum, this should include a description
     * wrapped in a `<p>` element.
     */
    children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=PageHeader.d.ts.map