import React from "react";
import { UnstyledButtonPropsFor } from "../UnstyledButton";
type IconButtonProps = UnstyledButtonPropsFor<"button"> & JSX.IntrinsicElements["button"] & {
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * The size of the button in CSS units, e.g. `"24px"`.
     * Note that this is the size of the *button* itself: the icon will be 0.75 * this size
     * @default 32px
     */
    size?: CSSStyleDeclaration["height"];
    /**
     * The icon button indicator dot displayed on the top right
     * As in IndicatorIcon
     */
    indicator?: "default" | "success" | "critical";
    /**
     * Whether the button is interactable
     */
    disabled?: boolean;
};
/**
 * Display an icon as a button. Can render an indicator
 */
export declare const IconButton: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<IconButtonProps>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=IconButton.d.ts.map