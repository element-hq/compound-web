import { default as React } from '../../../node_modules/react';
type NavBarProps = {
    /**
     * The CSS class name
     */
    className?: string;
    /**
     * Require a label for navigation landmarks
     */
    "aria-label": string;
    /**
     * Accessibility role that defaults to navigation.
     *
     * If you pass tablist you must also pass `aria-controls` as prop to your NavItem and must
     * ensure that the conditions stated in https://www.w3.org/WAI/ARIA/apg/patterns/tabs/#wai-ariaroles,states,andproperties
     * are met.
     */
    role?: "navigation" | "tablist";
};
/**
 * A navigation bar component
 */
export declare const NavBar: ({ children, className, role, "aria-label": ariaLabel, ...rest }: React.PropsWithChildren<NavBarProps>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=NavBar.d.ts.map