import { default as React } from '../../../node_modules/react';
import { UnstyledButtonPropsFor } from '../Button/UnstyledButton';
type ChatFilterProps = Omit<UnstyledButtonPropsFor<"button">, "disabled"> & {
    /**
     * Whether the filter is selected.
     */
    selected?: boolean;
};
/**
 * A chat filter button.
 */
export declare const ChatFilter: React.ForwardRefExoticComponent<Omit<ChatFilterProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=ChatFilter.d.ts.map