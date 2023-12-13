import { ComponentPropsWithoutRef, ComponentType, SVGAttributes } from "react";
type MenuItemElement = "button" | "label" | "a" | "div";
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
     */
    Icon: ComponentType<SVGAttributes<SVGElement>>;
    /**
     * The label to show on this menu item.
     */
    label: string | null;
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
 */
export declare const MenuItem: <C extends MenuItemElement = "button">({ as, className, Icon, label, onSelect, kind, children, onClick: onClickProp, disabled, ...props }: Props<C>) => JSX.Element;
export {};
//# sourceMappingURL=MenuItem.d.ts.map