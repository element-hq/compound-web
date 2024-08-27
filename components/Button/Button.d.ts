import { default as React, ComponentType, PropsWithChildren } from '../../../node_modules/react';
import { UnstyledButtonPropsFor } from './UnstyledButton';
interface ButtonComponent {
    <C extends React.ElementType>(props: {
        as: C;
    } & ButtonPropsFor<C>): React.ReactElement;
    (props: ButtonPropsFor<"button">): React.ReactElement;
}
type ButtonOwnProps = PropsWithChildren<{
    /**
     * The type of button.
     * Note: "destructive" is deprecated, please use the destructive prop in
     * conjunction with another button kind.
     */
    kind?: "primary" | "secondary" | "tertiary" | "destructive";
    /**
     * The t-shirt size of the button.
     */
    size?: "sm" | "lg";
    /**
     * Whether the button is an icon only button.
     */
    iconOnly?: boolean;
    /**
     * An icon to display within the button.
     */
    Icon?: ComponentType<React.SVGAttributes<SVGElement>>;
    /**
     * Whether this button triggers a destructive action.
     * @default false
     */
    destructive?: boolean;
}>;
type ButtonPropsFor<C extends React.ElementType> = ButtonOwnProps & UnstyledButtonPropsFor<C>;
/**
 * A button component that can be transformed into a link, but keep the button
 * styling using the `as` property.
 */
export declare const Button: ButtonComponent;
export {};
//# sourceMappingURL=Button.d.ts.map