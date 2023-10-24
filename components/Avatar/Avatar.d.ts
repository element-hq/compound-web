import React from "react";
import { SuspenseImg } from "../../utils/SuspenseImg";
/**
 * Avatar component that will fallback to an initial letter over a coloured
 * background if no source is provided or if the source has failed to load.
 */
export declare const Avatar: React.ForwardRefExoticComponent<(Omit<React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * The avatar image URL, if any.
     */
    src?: string | undefined;
    /**
     * The Matrix ID, Room ID, or Alias to generate the color when no image source
     * is provided. Also used as a fallback when name is empty.
     */
    id: string;
    /**
     * The name used for the initial letter displayed when no image source is provided.
     */
    name: string;
    /**
     * Defines the avatar type, typically round, square is usually for spaces.
     * @default "round"
     */
    type?: "round" | "square" | undefined;
    /**
     * The avatar size in CSS units, e.g. `"24px"`.
     */
    size?: string | undefined;
    /**
     * On click handler, will turn the avatar into a button element.
     */
    onClick?: ((e: React.MouseEvent) => void) | undefined;
    /**
     * Key down handler, will turn the avatar into a button element.
     */
    onKeyDown?: ((e: React.KeyboardEvent) => void) | undefined;
    /**
     * Key up handler, will turn the avatar into a button element.
     */
    onKeyUp?: ((e: React.KeyboardEvent) => void) | undefined;
    /**
     * Callback when the image has failed to load.
     */
    onError?: React.ComponentProps<typeof SuspenseImg>["onError"];
}, "ref"> | Omit<React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement> & {
    /**
     * The avatar image URL, if any.
     */
    src?: string | undefined;
    /**
     * The Matrix ID, Room ID, or Alias to generate the color when no image source
     * is provided. Also used as a fallback when name is empty.
     */
    id: string;
    /**
     * The name used for the initial letter displayed when no image source is provided.
     */
    name: string;
    /**
     * Defines the avatar type, typically round, square is usually for spaces.
     * @default "round"
     */
    type?: "round" | "square" | undefined;
    /**
     * The avatar size in CSS units, e.g. `"24px"`.
     */
    size?: string | undefined;
    /**
     * On click handler, will turn the avatar into a button element.
     */
    onClick?: ((e: React.MouseEvent) => void) | undefined;
    /**
     * Key down handler, will turn the avatar into a button element.
     */
    onKeyDown?: ((e: React.KeyboardEvent) => void) | undefined;
    /**
     * Key up handler, will turn the avatar into a button element.
     */
    onKeyUp?: ((e: React.KeyboardEvent) => void) | undefined;
    /**
     * Callback when the image has failed to load.
     */
    onError?: React.ComponentProps<typeof SuspenseImg>["onError"];
}, "ref">) & React.RefAttributes<HTMLButtonElement | HTMLSpanElement>>;
//# sourceMappingURL=Avatar.d.ts.map