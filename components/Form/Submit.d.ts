import React, { PropsWithChildren } from "react";
import { Submit as RadixSubmit } from "@radix-ui/react-form";
import { Button } from "../Button/Button";
type SubmitProps = {
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * The t-shirt size of the submit button.
     */
    size?: React.ComponentProps<typeof Button>["size"];
} & React.ComponentProps<typeof RadixSubmit>;
/**
 * Thin wrapper around Radix UI Submit component
 * https://www.radix-ui.com/docs/primitives/components/form#submit
 */
export declare const Submit: React.FC<PropsWithChildren<SubmitProps>>;
export {};
//# sourceMappingURL=Submit.d.ts.map