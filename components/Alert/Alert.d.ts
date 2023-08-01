import React, { PropsWithChildren } from "react";
type AlertProps = {
    type: "success" | "critical" | "info";
    title: string;
    className?: string;
    onClose?: (e: React.MouseEvent) => void;
};
export declare const Alert: React.FC<PropsWithChildren<AlertProps>>;
export {};
