import { default as React } from '../../../node_modules/react';
/**
 * A menu item with a checkbox control.
 * Must be used within a compound Menu or other `menu` or `menubar` aria role subtree.
 */
export declare const CheckboxMenuItem: React.ForwardRefExoticComponent<Pick<{
    as?: ("a" | "button" | "div") | undefined;
    className?: string;
    Icon?: React.ComponentType<React.SVGAttributes<SVGElement>> | React.ReactElement;
    label: string | null;
    labelProps?: React.ComponentPropsWithoutRef<typeof import('../..').Text>;
    onSelect: ((e: Event) => void) | null;
    onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement> | undefined;
    kind?: "primary" | "critical";
    disabled?: boolean;
    hideChevron?: boolean;
} & Omit<Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> | Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> | Omit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref">, "onClick" | "onSelect">, "label" | "className" | "disabled" | "onSelect"> & {
    /**
     * Whether the checkbox is checked.
     */
    checked: boolean;
} & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=CheckboxMenuItem.d.ts.map