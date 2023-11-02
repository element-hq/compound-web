export * from './TableCell';
export * from './TableHeadline';
export * from './Table';

export interface TableFilter {
    id: string;
    /**
     * Whether to disable the filter item.
     */
    disabled?: boolean;
    label: string;
    sublabel?: string;
    value: boolean;
    setValue(newValue: boolean): void;
}
