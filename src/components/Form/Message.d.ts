import React, { PropsWithChildren } from "react";
import { Message as RadixMessage } from "@radix-ui/react-form";
type MessageProps = {
    className?: string;
} & React.ComponentProps<typeof RadixMessage>;
/**
 * Thin wrapper around Radix UI Message component
 * https://www.radix-ui.com/docs/primitives/components/form#message
 */
export declare function Message({ children, ...props }: PropsWithChildren<MessageProps>): React.JSX.Element;
export {};
//# sourceMappingURL=Message.d.ts.map