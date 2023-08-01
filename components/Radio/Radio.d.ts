import React, { PropsWithChildren } from "react";
type RadioProps = {
    kind?: "primary" | "critical";
    className?: string;
    onMouseDown?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
} & React.ComponentPropsWithoutRef<"input">;
/**
 * Radio form control
 */
export declare const Radio: React.FC<PropsWithChildren<RadioProps>>;
export {};
