import { default as React } from '../../../node_modules/react';
import { Message } from '@radix-ui/react-form';
type MessageProps = {
    /**
     * The CSS class name.
     */
    className?: string;
} & React.ComponentProps<typeof Message>;
/**
 * An error message to display below a form control.
 */
export declare const ErrorMessage: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<MessageProps>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
/**
 * A success message to display below a form control.
 */
export declare const SuccessMessage: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<MessageProps>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
/**
 * A message showing a loading state
 */
export declare const LoadingMessage: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<MessageProps>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
/**
 * A help message to display below a form control.
 */
export declare const HelpMessage: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<MessageProps>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
export {};
//# sourceMappingURL=Message.d.ts.map