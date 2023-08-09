import React from "react";
import { SuspenseImg } from "../../utils/SuspenseImg";
type AvatarProps = JSX.IntrinsicElements["span"] & {
    src?: React.ComponentProps<typeof SuspenseImg>["src"];
    id: string;
    name: string;
    type?: "square" | "round";
    size?: CSSStyleDeclaration["height"];
    onError?: React.ComponentProps<typeof SuspenseImg>["onError"];
};
export declare const Avatar: React.ForwardRefExoticComponent<Omit<AvatarProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;
export {};
