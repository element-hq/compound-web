import React, { PropsWithChildren } from "react";
type AlertProps = {
    type: "success" | "critical" | "info";
    title: string;
    className?: string;
    onClose?: (e: React.MouseEvent) => void;
};
export declare const Alert: ({ type, title, children, className, onClose, ...props }: PropsWithChildren<AlertProps>) => JSX.Element;
export {};
