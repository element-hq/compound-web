import { Boundary, OpenChangeReason, Placement, UseFloatingReturn, UseInteractionsReturn } from '@floating-ui/react';
import { JSX, AriaAttributes, RefObject } from '../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface CommonUseTooltipProps {
    /**
     * The controlled open state of the tooltip.
     * If provided, the tooltip will be in controlled mode.
     * When true, the tooltip is always open. When false, the tooltip is always hidden.
     * When undefined, the tooltip will manage its own open state.
     * You will mostly want to omit this property. Will be used the vast majority
     * of the time during development.
     * @default undefined
     */
    open?: boolean;
    /**
     * Whether the tooltip should be forced to be in a closed state.
     */
    disabled?: boolean;
    /**
     * The caption of the tooltip.
     * JSX.Element can be used to provide accessibility content like kbd element.
     * Keep in mind, the caption should not be used for interactive content.
     */
    caption?: string | JSX.Element;
    /**
     * The event handler for the open change.
     */
    onOpenChange?: (open: boolean, event?: Event | undefined, reason?: OpenChangeReason | undefined) => void;
    /**
     * The placement of the tooltip.
     * @default "bottom"
     */
    placement?: Placement;
    /**
     * Whether the trigger element is interactive.
     * When trigger is interactive:
     *      - tooltip will be shown after a 300ms delay.
     * When trigger is not interactive:
     *      - tooltip will be shown instantly when pointer enters trigger.
     *      - trigger will be wrapped in a span with a tab index from prop nonInteractiveTriggerTabIndex
     */
    isTriggerInteractive: boolean;
    /**
     * An optional boundary element to constrain the tooltip within.
     * When provided, the tooltip will be hidden if it escapes this boundary.
     * Also passed to the `flip` middleware so it can choose a placement that
     * keeps the tooltip inside the boundary.
     * Accepts a single Element or an array of Elements. Useful for tooltips
     * near containers they should not overlap (e.g. the message composer).
     * Additionally, accepts `clippingAncestors`,
     * which are the overflow ancestors which will cause the element to be clipped.
     * @default undefined
     */
    boundary?: Boundary;
    /**
     * The maximum width of the tooltip. Accepts any valid CSS `max-width`
     * value (e.g. `200`, `"200px"`, `"20ch"`).
     * @default 580px
     */
    maxWidth?: number | string;
    /**
     * The maximum number of lines the tooltip text can wrap onto before being
     * truncated with an ellipsis.
     * @default 2
     */
    maxLines?: number;
    /**
     * Additional aria-* attributes to pass through to the floating tooltip for
     * edge cases which require more user awareness like errors & alerts.
     */
    "aria-atomic"?: AriaAttributes["aria-atomic"];
    "aria-live"?: AriaAttributes["aria-live"];
}
export interface TooltipLabel {
    /**
     * A label for the target element.
     */
    label: string;
}
export interface TooltipDescription {
    /**
     * A description for the target element.
     */
    description: string;
}
type UseTooltipProps = CommonUseTooltipProps & (TooltipLabel | TooltipDescription);
/**
 * What `useTooltip` returns, and what the tooltip context holds.
 * Spelled out rather than inferred: declaration files must be able to name
 * every type in it, which fails for Floating UI's types when Compound is built
 * from inside a `node_modules` directory (as a git dependency is).
 */
export type UseTooltipReturn = UseInteractionsReturn & UseFloatingReturn & {
    labelId: string;
    captionId: string | undefined;
    caption: CommonUseTooltipProps["caption"];
    purpose: "label" | "description";
    open: boolean;
    setOpen: NonNullable<CommonUseTooltipProps["onOpenChange"]>;
    maxWidth: NonNullable<CommonUseTooltipProps["maxWidth"]>;
    maxLines: NonNullable<CommonUseTooltipProps["maxLines"]>;
    tooltipProps: Pick<CommonUseTooltipProps, "aria-atomic" | "aria-live">;
    arrowRef: RefObject<null>;
};
export declare function useTooltip({ open: controlledOpen, disabled, onOpenChange, placement, isTriggerInteractive, caption, "aria-atomic": ariaAtomic, "aria-live": ariaLive, boundary, maxWidth, maxLines, ...props }: UseTooltipProps): UseTooltipReturn;
export {};
//# sourceMappingURL=useTooltip.d.ts.map