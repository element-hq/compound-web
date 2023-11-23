import React, { ComponentProps } from "react";
import { MenuItem } from "./MenuItem";
import { ToggleInput } from "../Form/Controls/Toggle";
type Props = Pick<ComponentProps<typeof MenuItem>, "className" | "Icon" | "label" | "onSelect"> & Omit<ComponentProps<typeof ToggleInput>, "id" | "children">;
/**
 * A menu item with a toggle control. Clicking anywhere on the surface will
 * activate the toggle.
 */
export declare const ToggleMenuItem: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=ToggleMenuItem.d.ts.map