import { ComponentType, ReactNode } from "react";
export interface MenuItemWrapperProps {
    /**
     * Event callback for when the item is selected via mouse, touch, or keyboard.
     * Calling event.preventDefault in this handler will prevent the menu from
     * being dismissed.
     */
    onSelect: (e: Event) => void;
    children: ReactNode;
}
export interface MenuData {
    /**
     * A component that wraps interactive menu items.
     */
    MenuItemWrapper: ComponentType<MenuItemWrapperProps> | null;
    /**
     * Event handler called when the open state of the menu changes.
     */
    onOpenChange: (open: boolean) => void;
}
/**
 * A React context providing information about the menu in which a given
 * component resides.
 */
export declare const MenuContext: import("react").Context<MenuData | null>;
//# sourceMappingURL=MenuContext.d.ts.map