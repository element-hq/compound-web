import { default as React, ComponentType, MouseEventHandler } from '../../../node_modules/.pnpm/react@19.3.1/node_modules/react';
type CommonProps = {
    className?: string;
    /**
     * An icon to display within the toast.
     */
    Icon?: ComponentType<React.SVGAttributes<SVGElement>>;
};
type ActionProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * Handler called when the toast is clicked. If provided, the whole toast
     * becomes a button.
     *
     * Mutually exclusive with `onClose`: as the toast is itself a button, it
     * cannot contain a nested close button.
     */
    onClick: MouseEventHandler<HTMLButtonElement>;
    onClose?: undefined;
    tooltip?: undefined;
    "aria-haspopup"?: false;
};
type NoticeProps = React.HTMLAttributes<HTMLDivElement> & {
    onClick?: undefined;
    "aria-haspopup"?: false;
} & ({
    onClose?: undefined;
    tooltip?: undefined;
} | {
    /**
     * Handler called when the close button is clicked. If provided, a close
     * button is shown on the right side of the toast.
     *
     * Mutually exclusive with `onClick`.
     */
    onClose: MouseEventHandler<HTMLButtonElement>;
    /**
     * The tooltip to show on the 'close' button.
     */
    tooltip: string;
});
type TriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    "aria-haspopup": true | "menu" | "listbox" | "tree" | "grid" | "dialog";
    /**
     * The tooltip to show on the 'more info' button.
     */
    tooltip: string;
    onClose?: undefined;
};
type ToastProps = CommonProps & (ActionProps | NoticeProps | TriggerProps);
/**
 * A temporary message appearing on top of other content.
 *
 * The message may:
 * - display a notice with an optional close button (by setting `onClose` and `tooltip`)
 * - offer a possible action (by setting `onClick`), or
 * - act as a trigger for a popover (by setting `aria-haspopup` and `tooltip`).
 */
export declare const Toast: React.ForwardRefExoticComponent<ToastProps & React.RefAttributes<HTMLButtonElement | HTMLDivElement>>;
export {};
//# sourceMappingURL=Toast.d.ts.map