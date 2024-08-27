import { default as React } from '../../../node_modules/react';
type ProgressProps = {
    /** The size variant of the progress bar */
    size: "sm" | "lg";
    /**
     * The colour variant to use for the progress bar indicator
     * If not set, the progress bar will be rendered with a gray tone, which should only be used when the progress bar is empty
     */
    tint?: "red" | "orange" | "lime" | "green";
    /** The CSS class name forwarded to the root element */
    className?: string;
    /** The value of the progress bar. Defaults to max if not provided */
    value?: number | null;
    /** The maximum value of the progress bar. Defaults to 1 if not provided */
    max?: number;
    /**
     * A function to get the text label to display in the progress bar.
     * If set, it will display a label on top of the progress bar
     */
    getValueLabel?: (value: number, max: number) => string;
} & Omit<React.ComponentProps<"div">, "children">;
/**
 * Displays an indicator showing the completion progress of a task, optionally with a label
 */
export declare const Progress: React.ForwardRefExoticComponent<Omit<ProgressProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=Progress.d.ts.map