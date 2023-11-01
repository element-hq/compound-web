import React, { PropsWithChildren } from "react";
type AlertProps = {
    /**
     * The type of alert
     */
    type: "success" | "critical" | "info";
    /**
     * The headline of the alert.
     */
    title: string;
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * Actions that will be displayed to the right of the content
     * Wraps and stacks actions under content when alert's size is <=600px
     * eg
     * ```
     * <Alert
     *  title='Title'
     *  actions={<Button onClick={doSomething}>Yes</Button>}
     * />
     * ```
     */
    actions?: React.ReactNode;
    /**
     * Event callback when dismissing the alert. Determines the display of the
     * "close" button at the top right of the alert.
     * @param e the event parameters
     */
    onClose?: (e: React.MouseEvent) => void;
};
/**
 * An alert component component that is dismissable when passing an `onClose`
 * property.
 */
export declare const Alert: React.FC<PropsWithChildren<AlertProps>>;
export {};
//# sourceMappingURL=Alert.d.ts.map