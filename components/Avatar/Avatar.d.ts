import React from "react";
type AvatarProps = {
    src?: string;
    id: string;
    name: string;
    type?: "square" | "round";
    className?: string;
    size?: CSSStyleDeclaration["height"];
};
export declare const Avatar: React.FC<AvatarProps>;
export {};
