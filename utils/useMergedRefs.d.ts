import { MutableRefObject, RefCallback } from "react";
/**
 * Combines multiple refs into one, useful for attaching multiple refs to the
 * same DOM node.
 */
export declare const useMergedRefs: <T>(...refs: (MutableRefObject<T | null> | RefCallback<T | null> | null)[]) => RefCallback<T | null>;
//# sourceMappingURL=useMergedRefs.d.ts.map