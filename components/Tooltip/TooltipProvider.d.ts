import { FC } from '../../../node_modules/react';
export declare const hoverDelay: {
    open: number;
    close: number;
};
interface Props {
    children: JSX.Element;
}
/**
 * Enables tooltips to share a global "warm-up" period for their hover delay.
 * You must wrap your application in this component for tooltips to function.
 */
export declare const TooltipProvider: FC<Props>;
export {};
//# sourceMappingURL=TooltipProvider.d.ts.map