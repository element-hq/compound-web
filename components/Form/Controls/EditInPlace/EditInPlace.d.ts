import React from '../../../../../node_modules/react';
import { TextInput } from "../Text";
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
     * The content of the text box
     */
    value: string;
    /**
     * Callback for when the user confirms the change
     */
    onSave: () => Promise<void>;
    /**
     * Calback for when the user wishes to cancel the change
     */
    onCancel: () => void;
    /**
     * Error message to be displayed below the box. If supplied, will disable the
     * save button.
     */
    error?: string;
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
     * True to disable the save button, false to enasble.
     * Default: false (enabled)
     */
    disableSaveButton?: boolean;
    /**
     * The label for the cancel button
     */
    cancelButtonLabel?: string;
} & React.ComponentProps<typeof TextInput>;
/**
 * A text box with save/cancel buttons that appear when the field is active
 */
export declare const EditInPlace: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=EditInPlace.d.ts.map