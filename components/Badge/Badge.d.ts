import React, { PropsWithChildren } from "react";
type BadgeProps = {
    className?: string;
    kind?: "default" | "success" | "critical";
};
export declare const Badge: React.FC<PropsWithChildren<BadgeProps>>;
export {};
