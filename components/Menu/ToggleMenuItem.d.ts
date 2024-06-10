import React, { ComponentProps } from '../../../node_modules/react';
import { MenuItem } from "./MenuItem";
import { ToggleInput } from "../Form/Controls/Toggle";
type Props = Pick<ComponentProps<typeof MenuItem>, "className" | "Icon" | "label" | "onSelect"> & Omit<ComponentProps<typeof ToggleInput>, "id" | "children" | "onSelect">;
/**
 * A menu item with a toggle control. Clicking anywhere on the surface will
 * activate the toggle.
 * Must be used within a compound Menu or other `menu` or `menubar` aria role subtree.
 */
export declare const ToggleMenuItem: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=ToggleMenuItem.d.ts.map