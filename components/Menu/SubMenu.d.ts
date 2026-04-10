import { FC, ReactNode } from '../../../node_modules/react';
interface Props {
    /**
     * The trigger element that opens the submenu. This should be a MenuItem.
     */
    trigger: ReactNode;
    /**
     * Whether the submenu is open (controlled).
     */
    open?: boolean;
    /**
     * Event handler called when the open state of the submenu changes.
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * The submenu contents (typically MenuItem elements).
     */
    children: ReactNode;
}
/**
 * A submenu within a Menu or ContextMenu. The trigger should be a MenuItem
 * component and the children are the submenu items.
 */
export declare const SubMenu: FC<Props>;
export {};
//# sourceMappingURL=SubMenu.d.ts.map