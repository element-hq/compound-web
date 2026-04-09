import { default as React, ComponentType, JSX, PropsWithChildren } from '../../../node_modules/react';
interface VisualListItemProps extends React.HTMLProps<HTMLLIElement> {
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * The icon component.
     */
    Icon: ComponentType<React.SVGAttributes<SVGElement>>;
    success?: boolean;
    destructive?: boolean;
}
/**
 * A list component.
 */
export declare function VisualListItem({ className, children, Icon, success, destructive, ...props }: PropsWithChildren<VisualListItemProps>): JSX.Element;
export {};
//# sourceMappingURL=VisualListItem.d.ts.map