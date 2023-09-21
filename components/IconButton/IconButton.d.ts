import React from "react";
type IconButtonProps = JSX.IntrinsicElements["button"] & {
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * The avatar size in CSS units, e.g. `"24px"`.
     * @default 32px
     */
    size?: CSSStyleDeclaration["height"];
    /**
     * The icon button indicator displayed on the top right
     */
    indicator?: "default" | "highlight";
};
/**
 * Display an icon as a button. Can render an indicator
 */
export declare const IconButton: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<IconButtonProps>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=IconButton.d.ts.map