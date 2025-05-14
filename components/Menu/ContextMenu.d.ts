import { FC, ReactNode } from '../../../node_modules/react';
interface Props {
    /**
     * The menu title.
     */
    title: string;
    /**
     * Wether the title is displayed.
     * @default true
     */
    showTitle?: boolean;
    /**
     * Event handler called when the open state of the menu changes.
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * The trigger that can be right-clicked or long-pressed to open the menu.
     * This must be a component that accepts a ref and spreads props.
     * https://www.radix-ui.com/primitives/docs/guides/composition
     */
    trigger: ReactNode;
    /**
     * Whether the functionality of this menu is available through some other
     * keyboard-accessible means. Preferably this should be true, because context
     * menus are potentially difficult to discover, but if false the trigger will
     * become focusable so that it can be opened via keyboard navigation.
     */
    hasAccessibleAlternative: boolean;
    /**
     * The menu contents.
     */
    children: ReactNode;
}
/**
 * A menu opened by right-clicking or long-pressing another UI element.
 */
export declare const ContextMenu: FC<Props>;
export {};
//# sourceMappingURL=ContextMenu.d.ts.map