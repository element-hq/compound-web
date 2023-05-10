import React, { PropsWithChildren } from "react";
type CheckboxProps = {
    kind?: "primary" | "critical";
    className?: string;
} & React.ComponentPropsWithoutRef<"input">;
export declare const Checkbox: ({ kind, className, ...props }: PropsWithChildren<CheckboxProps>) => React.JSX.Element;
export {};
