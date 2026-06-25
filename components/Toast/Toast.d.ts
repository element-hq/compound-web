import { default as React, ComponentType, MouseEventHandler } from '../../../node_modules/react';
type CommonProps = {
    className?: string;
    /**
     * An icon to display within the toast.
     */
    Icon?: ComponentType<React.SVGAttributes<SVGElement>>;
};
/**
 * Props for the default, non-interactive toast. It renders as a `div` and can
 * optionally show a close button via `onClose`.
 */
type ClosableToastProps = CommonProps & {
    /**
     * Handler called when the close button is clicked. If provided, a close
     * button is shown on the right side of the toast.
     *
     * Mutually exclusive with `onClick`.
     */
    onClose?: MouseEventHandler<HTMLButtonElement>;
    /**
     * The tooltip to show on the close button. This is only used if `onClose` is
     * provided.
     */
    tooltip?: string;
    onClick?: never;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "onClick">;
/**
 * Props for a clickable toast. The whole toast renders as a `button` and
 * invokes `onClick` when activated.
 */
type ClickableToastProps = CommonProps & {
    /**
     * Handler called when the toast is clicked. If provided, the whole toast
     * becomes a button.
     *
     * Mutually exclusive with `onClose`: as the toast is itself a button, it
     * cannot contain a nested close button.
     */
    onClick: MouseEventHandler<HTMLButtonElement>;
    onClose?: never;
    tooltip?: never;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "type">;
/**
 * A toast is either non-interactive (and optionally dismissable via a close
 * button), or clickable as a whole — but never both.
 */
type ToastProps = ClosableToastProps | ClickableToastProps;
export declare const Toast: React.ForwardRefExoticComponent<ToastProps & React.RefAttributes<HTMLButtonElement | HTMLDivElement>>;
export {};
//# sourceMappingURL=Toast.d.ts.map