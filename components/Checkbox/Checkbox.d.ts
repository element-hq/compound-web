import React, { PropsWithChildren } from "react";
type CheckboxProps = {
    kind?: "primary" | "critical";
    className?: string;
    onMouseDown?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
} & React.ComponentPropsWithoutRef<"input">;
export declare const Checkbox: React.FC<PropsWithChildren<CheckboxProps>>;
export {};
