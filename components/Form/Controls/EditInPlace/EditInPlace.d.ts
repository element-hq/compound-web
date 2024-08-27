import { default as React } from '../../../../../node_modules/react';
import { TextControl } from '../..';
type Props = {
    /**
     * The label for the control
     */
    label: string;
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * Callback for when the user confirms the change
     */
    onSave?: (e: React.FormEvent<HTMLFormElement>) => Promise<void> | void;
    /**
     * Callback for when the user wishes to cancel the change
     */
    onCancel?: (e: React.FormEvent<HTMLFormElement>) => void;
    /**
     * onInput event handler on the text control
     */
    onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Callback for when the server validation errors should be cleared.
     */
    onClearServerErrors?: () => void;
    /**
     * Whether the field is in an error state according to the server validation.
     *
     * For validation messages, use native validations properties directly, or add custom error messages as children.
     */
    serverInvalid?: boolean;
    /**
     * Label to be displayed by the green check at the bottom. Will only be displayed
     * for 2 seconds after the onSave callback promise resolves successfully.
     */
    savedLabel?: string;
    /**
     * The label for the save button
     */
    saveButtonLabel: string;
    /**
     * The label for the 'in progress' saving caption
     */
    savingLabel: string;
    /**
     * The label for the cancel button
     */
    cancelButtonLabel: string;
    /**
     * Label to be displayed under the input as a help text
     */
    helpLabel?: string;
    /**
     * If true, disabled the entire component to disallow editing.
     */
    disabled?: boolean;
} & React.ComponentProps<typeof TextControl>;
/**
 * A text box with save/cancel buttons that appear when the field is active.
 * Since thios control has its own 'save' button, it should *not* appear as part
 * of a larger form: it exists as its own form that submits separately.
 */
export declare const EditInPlace: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=EditInPlace.d.ts.map