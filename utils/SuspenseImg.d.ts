import React from "react";
interface ImageLoadingCache {
    /**
     * A map of all sources loaded with this cache instance
     * Contains a promise if the image is being loaded, and `true` if the source
     * has succesfully been loaded.
     */
    __cache: Map<string, Promise<unknown> | boolean>;
    /**
     * Will attempt to load the source and will throw an exception until
     * the image has been loaded succesfully.
     * The exception will be caught by React Suspense and that will notify it to
     * display the fallback
     * @param src the image source.
     * @returns true if the source has been loaded successfully
     */
    read: (src: string) => boolean;
}
type SuspenseImgProps = JSX.IntrinsicElements["img"] & {
    /**
     * The source of the image to load
     */
    src: string;
    /**
     * The cache instance to drive the suspense loading
     * Useful to override in a test environment
     * @default imgCache a generic cache instance shared globally
     */
    cache?: ImageLoadingCache;
};
export declare const SuspenseImg: React.FC<SuspenseImgProps>;
export {};
//# sourceMappingURL=SuspenseImg.d.ts.map