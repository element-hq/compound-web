import { FC, ReactNode } from '../../../node_modules/react';
interface Props {
    /**
     * The menu title. This can be hidden with `showTitle={false}` in which case it will only
     * be a label for screen readers.
     */
    title: string;
    /**
     * Controls whether the title is displayed (see `title` prop). Titles are only displayed on
     * web: on mobile, this parameter is ignored.
     */
    showTitle?: boolean;
    /**
     * Whether the menu is open.
     */
    open: boolean;
    /**
     * Event handler called when the open state of the menu changes. This includes
     * anything like clicking the trigger, selecting a menu item, or dismissing
     * the menu with the mouse or keyboard.
     */
    onOpenChange: (open: boolean) => void;
    /**
     * The button that opens the menu. This must be a component that accepts a ref
     * and spreads props.
     * https://www.radix-ui.com/primitives/docs/guides/composition
     */
    trigger: ReactNode;
    /**
     * The menu contents.
     */
    children: ReactNode;
    /**
     * The side of the trigger on which to place the menu. Note that the menu may
     * still end up on a different side than the one you request if there isn't
     * enough space.
     * @default bottom
     */
    side?: "top" | "right" | "bottom" | "left";
    /**
     * The edge along which the menu and trigger will be aligned.
     * @default center
     */
    align?: "start" | "center" | "end";
}
/**
 * A menu opened by pressing a button.
 */
export declare const Menu: FC<Props>;
export {};
//# sourceMappingURL=Menu.d.ts.map