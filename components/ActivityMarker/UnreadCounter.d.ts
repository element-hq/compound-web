import { HTMLProps } from '../../../node_modules/react';
interface UnreadCounterProps extends HTMLProps<HTMLDivElement> {
    /**
     * The number to display.
     * If `null`, the counter will be empty.
     */
    count: string | number | null;
}
export declare function UnreadCounter({ count, ...props }: UnreadCounterProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=UnreadCounter.d.ts.map