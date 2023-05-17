import React, { PropsWithChildren } from "react";
type RadioProps = {
    kind?: "primary" | "critical";
    className?: string;
} & React.ComponentPropsWithoutRef<"input">;
/**
 * Radio form control
 */
export declare const Radio: ({ kind, className, ...props }: PropsWithChildren<RadioProps>) => React.JSX.Element;
export {};
