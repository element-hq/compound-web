import React from "react";
type SuspenseImgProps = {
    src: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;
export declare function SuspenseImg({ src, ...props }: SuspenseImgProps): JSX.Element;
export {};
