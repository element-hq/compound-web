import React, { ComponentType, PropsWithChildren } from "react";
import { UnstyledButtonPropsFor } from "./UnstyledButton";
interface ButtonComponent {
    <C extends React.ElementType>(props: {
        as: C;
    } & ButtonPropsFor<C>): React.ReactElement;
    (props: ButtonPropsFor<"button">): React.ReactElement;
}
type ButtonOwnProps = PropsWithChildren<{
    /**
     * The type of button.
     */
    kind?: "primary" | "secondary" | "tertiary" | "destructive";
    /**
     * The t-shirt size of the button.
     */
    size?: "sm" | "lg";
    /**
     * An icon to display within the button.
     */
    Icon?: ComponentType<React.SVGAttributes<SVGElement>>;
}>;
type ButtonPropsFor<C extends React.ElementType> = ButtonOwnProps & UnstyledButtonPropsFor<C>;
/**
 * A button component that can be transformed into a link, but keep the button
 * styling using the `as` property.
 */
export declare const Button: ButtonComponent;
export {};
//# sourceMappingURL=Button.d.ts.map