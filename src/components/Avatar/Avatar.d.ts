import React from "react";
type AvatarProps = {
    src?: string;
    id: string;
    name: string;
    type?: "square" | "round";
    className?: string;
    size?: CSSStyleDeclaration["height"];
};
export declare const Avatar: ({ src, id, name, type, className, size, }: AvatarProps) => React.JSX.Element;
export {};
