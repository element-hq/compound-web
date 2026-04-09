import { default as React, ComponentPropsWithoutRef, ReactNode } from '../../../node_modules/react';
interface Props extends ComponentPropsWithoutRef<"div"> {
    /**
     * The menu title.
     */
    title: string;
    /**
     * Whether to show the title. If false, the title will be hidden but still used as a label for screen readers.
     */
    showTitle?: boolean;
    /**
     * The CSS class.
     */
    className?: string;
    /**
     * The menu contents.
     */
    children: ReactNode;
}
/**
 * A menu in a floating box, as commonly seen on desktop.
 */
export declare const FloatingMenu: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=FloatingMenu.d.ts.map