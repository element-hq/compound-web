import { default as React, KeyboardEvent } from '../../../node_modules/.pnpm/react@19.2.7/node_modules/react';
/**
 * Props injected into the trigger render function.
 */
export type DropdownTriggerProps = {
    role?: "combobox";
    "aria-haspopup"?: "listbox";
    "aria-labelledby"?: string;
    "aria-controls"?: string;
    "aria-expanded"?: boolean;
    onClick?: () => void;
    onKeyDown?: (e: KeyboardEvent<Element>) => void;
};
type DropdownProps = {
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * The controlled value of the dropdown.
     */
    value?: string;
    /**
     * The default value of the dropdown, used when uncontrolled.
     */
    defaultValue?: string;
    /**
     * The values of the dropdown.
     * [value, text]
     */
    values: [string, string][];
    /**
     * The placeholder text.
     * Required because it's unusual not to set this unless making a custom dropdown with a custom trigger,
     * in which case you may explicitly pass null.
     */
    placeholder: string | null;
    /**
     * The label to display at the top of the dropdown
     * Required because it's unusual not to set this unless making a custom dropdown with a custom trigger,
     * in which case you may explicitly pass null.
     */
    label: string | null;
    /**
     * The help label to display at the bottom of the dropdown
     */
    helpLabel?: string;
    /**
     * Callback for when the value changes.
     * @param value
     */
    onValueChange?: (value: string) => void;
    /**
     * The error message to display.
     */
    error?: string;
    /**
     * The trigger element used to open the menu.
     * Receives the props to apply to the trigger.
     * Default: a button with the selected value or the placeholder text and a chevron down icon.
     */
    trigger?: (props: DropdownTriggerProps) => React.ReactNode;
};
/**
 * The dropdown content.
 */
export declare const Dropdown: React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=Dropdown.d.ts.map