import { default as React } from '../../../node_modules/react';

/**
 * A menu item with a toggle control.
 * Must be used within a compound Menu or other `menu` or `menubar` aria role subtree.
 */
export declare const ToggleMenuItem: React.ForwardRefExoticComponent<Pick<{
    as?: ("a" | "button" | "div") | undefined;
    className?: string;
    Icon: React.ComponentType<React.SVGAttributes<SVGElement>> | React.ReactNode;
    label: string | null;
    labelProps?: React.ComponentPropsWithoutRef<typeof import('../..').Text>;
    onSelect: ((e: Event) => void) | null;
    kind?: "primary" | "critical";
    disabled?: boolean;
} & Omit<Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> | Omit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> | Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "onSelect">, "label" | "className" | "disabled" | "onSelect" | "Icon"> & {
    /**
     * Whether the toggle is checked.
     */
    checked: boolean;
} & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=ToggleMenuItem.d.ts.map