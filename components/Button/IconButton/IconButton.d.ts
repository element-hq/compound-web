import { default as React } from '../../../../node_modules/react';
import { UnstyledButtonPropsFor } from '../UnstyledButton';
type IconButtonProps = UnstyledButtonPropsFor<"button"> & {
    /**
     * The type of button.
     * @default "primary"
     */
    kind?: "primary" | "secondary";
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
    /**
     * Whether this button triggers a destructive action.
     * @default false
     */
    destructive?: boolean;
    /**
     * Optional tooltip for the button
     */
    tooltip?: string;
    /**
     * Hide the background when the button is not active or hovered.
     * @default false
     */
    noBackground?: boolean;
};
/**
 * Display an icon as a button. Can render an indicator
 */
export declare const IconButton: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<IconButtonProps>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=IconButton.d.ts.map