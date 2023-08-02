import React from "react";
import { Message as RadixMessage } from "@radix-ui/react-form";
type MessageProps = {
    className?: string;
} & React.ComponentProps<typeof RadixMessage>;
/**
 * Thin wrapper around Radix UI Message component
 * https://www.radix-ui.com/docs/primitives/components/form#message
 */
export declare const Message: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<MessageProps>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
export {};
