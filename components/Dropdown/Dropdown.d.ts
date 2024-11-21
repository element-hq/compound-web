import { default as React } from '../../../node_modules/react';
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
     */
    placeholder: string;
    /**
     * The label to display at the top of the dropdown
     */
    label: string;
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
};
/**
 * The dropdown content.
 */
export declare const Dropdown: React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=Dropdown.d.ts.map