import React, { PropsWithChildren } from "react";
type CheckboxProps = {
    kind?: "primary" | "critical";
    className?: string;
    onMouseDown?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
} & React.ComponentPropsWithoutRef<"input">;
export declare const Checkbox: ({ kind, className, onMouseDown, ...props }: PropsWithChildren<CheckboxProps>) => React.JSX.Element;
export {};
