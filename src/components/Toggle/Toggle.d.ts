import React, { PropsWithChildren } from "react";
type ToggleProps = {
    className?: string;
    onMouseDown?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
} & React.ComponentPropsWithoutRef<"input">;
/**
 * Standalone toggle component to be used with a Radix form control
 * See https://www.radix-ui.com/docs/primitives/components/form#composing-with-your-own-components
 */
export declare const Toggle: ({ className, onMouseDown, ...props }: PropsWithChildren<ToggleProps>) => React.JSX.Element;
export {};
//# sourceMappingURL=Toggle.d.ts.map