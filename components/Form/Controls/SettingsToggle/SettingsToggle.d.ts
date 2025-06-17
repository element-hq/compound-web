import { ComponentProps, PropsWithChildren, default as React } from '../../../../../node_modules/react';
import { ToggleInput } from '../Toggle';
type SettingsToggleProps = {
    /**
     * The CSS class name for the containing field.
     */
    className?: string;
    /**
     * The field name.
     */
    name: string;
    label: string;
    /**
     * Optional help text to display below the setting.
     */
    helpMessage?: string;
    /**
     * Optional help text to display below the setting.
     */
    disabledMessage?: string;
} & Omit<ComponentProps<typeof ToggleInput>, "type">;
/**
 * A toggle component.
 */
export declare const SettingsToggleInput: React.ForwardRefExoticComponent<Omit<PropsWithChildren<SettingsToggleProps>, "ref"> & React.RefAttributes<HTMLInputElement>>;
/**
 * A styled checkbox input wrapped in a `Control` component, for use in Radix forms.
 */
export declare const SettingsToggleControl: React.ForwardRefExoticComponent<Omit<Omit<PropsWithChildren<SettingsToggleProps>, "ref"> & React.RefAttributes<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=SettingsToggle.d.ts.map