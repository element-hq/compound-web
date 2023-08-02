import React from "react";
export declare const Checkbox: React.ForwardRefExoticComponent<{
    kind?: "primary" | "critical" | undefined;
    className?: string | undefined;
    onMouseDown?: ((e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void) | undefined;
} & Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLInputElement>>;
