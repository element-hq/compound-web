import { default as React, ComponentPropsWithoutRef, ComponentType, ReactElement, SVGAttributes, MouseEventHandler } from '../../../node_modules/react';
import { Text } from '../Typography/Text';
type MenuItemElement = "button" | "a" | "div";
type Props<C extends MenuItemElement> = {
    /**
     * The element type of this menu item.
     * @default button
     */
    as?: C;
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * The icon to show on this menu item.
     * When `Icon` is a ReactElement, it should spread the props
     */
    Icon?: ComponentType<SVGAttributes<SVGElement>> | ReactElement;
    /**
     * The label to show on this menu item.
     */
    label: string | null;
    /**
     * Additional properties to pass to the Text label component.
     */
    labelProps?: ComponentPropsWithoutRef<typeof Text>;
    /**
     * Event callback for when the item is selected via mouse, touch, or keyboard.
     * Calling event.preventDefault in this handler will prevent the menu from
     * being dismissed.
     */
    onSelect: ((e: Event) => void) | null;
    /**
     * Event callback for when the item is clicked.
     * @param e
     */
    onClick?: MouseEventHandler<HTMLElementTagNameMap[C]>;
    /**
     * The color variant of the menu item.
     * @default primary
     */
    kind?: "primary" | "critical";
    disabled?: boolean;
    /**
     * Whether to hide the chevron navigation hint.
     */
    hideChevron?: boolean;
} & Omit<ComponentPropsWithoutRef<C>, "onSelect" | "onClick">;
/**
 * An item within a menu, acting either as a navigation button, or simply a
 * container for other interactive elements.
 * Must be used within a compound Menu or other `menu` or `menubar` aria role subtree.
 */
export declare const MenuItem: <C extends MenuItemElement = "button">({ as, className, Icon, label, labelProps, onSelect, kind, children, onClick: onClickProp, disabled, hideChevron, ...props }: Props<C>) => React.ReactElement;
export {};
//# sourceMappingURL=MenuItem.d.ts.map