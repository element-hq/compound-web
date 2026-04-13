import { default as React, ComponentType, MouseEventHandler } from '../../../node_modules/react';
export declare const Toast: React.ForwardRefExoticComponent<{
    className?: string;
    /**
     * An icon to display within the button.
     */
    Icon?: ComponentType<React.SVGAttributes<SVGElement>>;
    /**
     * Whether to show the action button. If true, an action button will be shown on the right side of the toast.
     */
    onClose?: MouseEventHandler<HTMLButtonElement>;
    /**
     * The tooltip to show on the close button. This is only used if `onClose` is provided.
     */
    tooltip?: string;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Toast.d.ts.map