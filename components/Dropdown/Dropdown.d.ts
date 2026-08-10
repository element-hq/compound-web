import { default as React, Ref, KeyboardEvent } from '../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
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
type DropdownProps<K = string> = {
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * The controlled value of the dropdown.
     */
    value?: K;
    /**
     * The default value of the dropdown, used when uncontrolled.
     */
    defaultValue?: K;
    /**
     * The values of the items presented in the dropdown, in order.
     * These are the values provided back to onValueChange and the values provided
     * to renderItem, if provided.
     */
    values: K[];
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
    onValueChange?: (value: K) => void;
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
    /**
     * A function render the node that represent a given item, given the value of that item.
     * To render the placeholder, null is passed.
     */
    renderItem: (value: K | null) => React.ReactNode;
    /**
     * A ref to the default trigger button.
     * Unused if a custom `trigger` is provided.
     */
    ref?: Ref<HTMLButtonElement>;
};
/**
 * A dropdown that lets the user select one of a set of values.
 * The type parameter `K` represents the set of values.
 */
export declare function Dropdown<K extends string | number = string>({ className, label, helpLabel, onValueChange, error, value: controlledValue, defaultValue, values, renderItem, trigger, ref, ...props }: DropdownProps<K>): React.JSX.Element;
export {};
//# sourceMappingURL=Dropdown.d.ts.map