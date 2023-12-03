import React, { PropsWithChildren } from "react";
interface ButtonComponent {
    <C extends React.ElementType>(props: {
        as: C;
    } & UnstyledButtonPropsFor<C>): React.ReactElement;
    (props: UnstyledButtonPropsFor<"button">): React.ReactElement;
}
type UnstyledButtonProps = PropsWithChildren<{
    /**
     * Note that disabled attribute is not added to buttons, so that disabled buttons are discoverable by keyboard.
     * `aria-disabled` attribute is used to indicate button is disabled.
     * Event handlers are not passed to disabled buttons (onClick, onSubmit).
     */
    disabled?: boolean;
}>;
export type UnstyledButtonPropsFor<C extends React.ElementType> = UnstyledButtonProps & Omit<React.ComponentPropsWithoutRef<C>, keyof UnstyledButtonProps | "as"> & {
    ref?: React.Ref<React.ComponentRef<C>>;
};
/**
 * Unstyled button component. Can be disabled and optionalally rendered as an anchor.
 * Intended to be wrapped with styles and exported as new button type - eg `IconButton` or `Button`.
 *
 * Not to be used externally.
 */
export declare const UnstyledButton: ButtonComponent;
export {};
//# sourceMappingURL=UnstyledButton.d.ts.map