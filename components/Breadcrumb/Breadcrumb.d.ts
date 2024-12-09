import { HTMLProps, JSX, MouseEventHandler } from '../../../node_modules/react';
interface BreadcrumbProps extends HTMLProps<HTMLElement> {
    /**
     * The label for the back button.
     */
    backLabel: string;
    /**
     * The click handler for the back button.
     */
    onBackClick: MouseEventHandler<HTMLButtonElement>;
    /**
     * The pages to display in the breadcrumb.
     * All the pages except the last one are displayed as links.
     */
    pages: string[];
    /**
     * The click handler for a page.
     * @param page - The page that was clicked.
     * @param index - The index of the page that was clicked.
     */
    onPageClick: (page: string, index: number) => void;
}
/**
 * A breadcrumb component.
 */
export declare function Breadcrumb({ backLabel, onBackClick, pages, onPageClick, className, ...props }: BreadcrumbProps): JSX.Element;
export {};
//# sourceMappingURL=Breadcrumb.d.ts.map