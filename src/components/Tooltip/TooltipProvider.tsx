import { FloatingDelayGroup } from "@floating-ui/react";
import React, { type FC } from "react";

export const hoverDelay = { open: 300, close: 0 };

interface Props {
  children: React.ReactNode;
}

/**
 * Enables tooltips to share a global "warm-up" period for their hover delay.
 * You must wrap your application in this component for tooltips to function.
 */
export const TooltipProvider: FC<Props> = ({ children }) => (
  <FloatingDelayGroup delay={hoverDelay} timeoutMs={300}>
    {children}
  </FloatingDelayGroup>
);

TooltipProvider.displayName = "TooltipProvider";
