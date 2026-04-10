import { ComponentType, ReactNode } from '../../../node_modules/react';
export interface MenuItemWrapperProps {
    /**
     * Event callback for when the item is selected via mouse, touch, or keyboard.
     * Calling event.preventDefault in this handler will prevent the menu from
     * being dismissed.
     */
    onSelect: (e: Event) => void;
    children: ReactNode;
}
export interface SubMenuWrapperProps {
    /**
     * The trigger element that opens the submenu (typically a MenuItem).
     */
    trigger: ReactNode;
    /**
     * The submenu contents.
     */
    children: ReactNode;
    /**
     * Whether the submenu is open (controlled).
     */
    open?: boolean;
    /**
     * Event handler called when the open state of the submenu changes.
     */
    onOpenChange?: (open: boolean) => void;
}
export interface MenuData {
    /**
     * A component that wraps interactive menu items.
     */
    MenuItemWrapper: ComponentType<MenuItemWrapperProps> | null;
    /**
     * A component that wraps submenus.
     */
    SubMenuWrapper: ComponentType<SubMenuWrapperProps> | null;
    /**
     * Event handler called when the open state of the menu changes.
     */
    onOpenChange: (open: boolean) => void;
}
/**
 * A React context providing information about the menu in which a given
 * component resides.
 */
export declare const MenuContext: import('../../../node_modules/react').Context<MenuData | null>;
//# sourceMappingURL=MenuContext.d.ts.map