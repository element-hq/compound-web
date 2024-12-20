import { default as React, JSX, PropsWithChildren } from '../../../node_modules/react';
interface VisualListProps extends React.HTMLProps<HTMLUListElement> {
    /**
     * The CSS class name.
     */
    className?: string;
}
/**
 * A list component.
 */
export declare function VisualList({ className, children, ...props }: PropsWithChildren<VisualListProps>): JSX.Element;
export {};
//# sourceMappingURL=VisualList.d.ts.map