import { ComponentPropsWithoutRef, ComponentType, ReactNode, SVGAttributes } from '../../../node_modules/react';
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
     * When `Icon` is a ReactNode, it should spread the props
     */
    Icon: ComponentType<SVGAttributes<SVGElement>> | ReactNode;
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
     * The color variant of the menu item.
     * @default primary
     */
    kind?: "primary" | "critical";
    disabled?: boolean;
} & Omit<ComponentPropsWithoutRef<C>, "onSelect">;
/**
 * An item within a menu, acting either as a navigation button, or simply a
 * container for other interactive elements.
 * Must be used within a compound Menu or other `menu` or `menubar` aria role subtree.
 */
export declare const MenuItem: <C extends MenuItemElement = "button">({ as, className, Icon, label, labelProps, onSelect, kind, children, onClick: onClickProp, disabled, ...props }: Props<C>) => JSX.Element;
export {};
//# sourceMappingURL=MenuItem.d.ts.map