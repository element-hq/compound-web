import React, { ReactElement } from "react";
import { Field } from "@radix-ui/react-form";
type Props = {
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * The checkbox/radio control to render alongside the rest of the field.
     */
    control: ReactElement;
} & React.ComponentProps<typeof Field>;
export declare const InlineField: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=InlineField.d.ts.map