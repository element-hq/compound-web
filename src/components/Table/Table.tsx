import React, { useCallback, useMemo } from 'react';
import classNames from 'classnames';

import styles from './Table.module.css';
import { OrderByDirection } from '../../hooks/useOrderBy';
import { MultiSelect, SelectAllMode } from '../../hooks/useMultiSelect';
import { TableMultiSelectCheckbox } from './TableMutliSelectCheckbox';
import { TableRow } from './TableRow';


/**
 * Helper Id to make checkboxes etc. unique accross tables.
 */
let tableId = 1;

export interface SortOption {
    /**
     * Label of the sort option, e.g. Username A-Z, Username Z-A
     */
    label: string;
    /**
     * The order by field id. Undefined means no specific order.
     */
    orderById: string;
    /**
     * The order by direction.
     */
    orderByDirection: OrderByDirection;
}

export interface TableColumnSpec<I> {
    /**
     * Unique ID for the column.
     */
    id: string;
    /**
     * Human-readable title of the column.
     */
    title: string;
    /**
     * A component to render for cells in this column.
     */
    cell: React.ComponentType<{ item: I }>;
}

export interface TableSpec<I> {
    /**
     * Returns a value that uniquely identifies the item.
     */
    getItemId: (item: I) => string | number;
    columns: TableColumnSpec<I>[];
    sortOptions?: SortOption[];
    /**
     * Optional component to render a table row.
     */
    Row?: typeof TableRow<I>;
}

interface TableProps<I> {
    /**
     * List of items to be displayed in the table.
     */
    items: Array<I>;
    /**
     * Optional callback that is called when an item is clicked.
     */
    onItemClicked?: (item: I) => void;
    /**
     * Spec of the table structure.
     */
    spec: TableSpec<I>;
    multiSelect?: MultiSelect<I>;
}

const determineSelectAllState = <I,>(
    currentItems: Array<I>,
    getItemId: (item: I) => string | number,
    multiSelect?: MultiSelect<I>,
): { isSelectAllChecked: boolean; isSelectedAllIndeterminate: boolean } => {
    if (!multiSelect) return { isSelectAllChecked: false, isSelectedAllIndeterminate: false };

    if (multiSelect.selectAllMode === SelectAllMode.FLAG) {
        // Select all should be triggered by a flag.
        // The "select all" checkbox should be checked.
        // It is only in indeterminate state if there are selected items
        // (selected items should be subtracted from "all").
        return {
            isSelectAllChecked: multiSelect.allSelected,
            isSelectedAllIndeterminate: multiSelect.selectedItems.size > 0,
        };
    }

    // Select all collects items from different pages.
    // It should be checked if any item is selected.
    // It is only indeterminate if not all items of the current page are selected.
    const isSelectAllChecked = multiSelect.selectedItems.size > 0;
    return {
        isSelectAllChecked,
        isSelectedAllIndeterminate:
            isSelectAllChecked &&
            !currentItems.every((i) => {
                return multiSelect.selectedItems.has(getItemId(i));
            }),
    };
};

/**
 * Simple table component. Provide at least a table spec and some items to display a table.
 */
export const Table = <I,>({
    items,
    onItemClicked,
    spec,
    className,
    multiSelect,
    ...props
}: TableProps<I> & React.ComponentPropsWithoutRef<'table'>) => {
    const Row = spec.Row || TableRow;

    const thisTableId = useMemo(() => {
        return tableId++;
    }, []);

    const rows = items.map((item) => {
        const rowKey = spec.getItemId(item);
        return (
            <Row
                onItemClicked={onItemClicked}
                item={item}
                tableSpec={spec}
                key={rowKey}
                rowKey={rowKey}
                multiSelect={multiSelect}
                tableId={thisTableId}
            />
        );
    });

    const headers = spec.columns.map((columnSpec) => {
        return (
            <th key={columnSpec.id} className={styles.tableHeader}>
                {columnSpec.title}
            </th>
        );
    });

    const { isSelectAllChecked, isSelectedAllIndeterminate } = determineSelectAllState(
        items,
        spec.getItemId,
        multiSelect,
    );

    const handleSelectAllChange = useCallback(() => {
        if (!multiSelect) return;

        if (multiSelect.selectAllMode === SelectAllMode.FLAG) {
            // Select all is in "flag" mode:
            // Toggle the flag and deselect all items.
            multiSelect.setAllSelected(!multiSelect.allSelected);
            multiSelect.setSelectedItems(new Map());
            return;
        }

        if (!isSelectAllChecked || isSelectedAllIndeterminate) {
            // None or not all current items are selected: Select current items.
            const newSelectedItems = new Map(multiSelect.selectedItems);
            items.forEach((i) => {
                newSelectedItems.set(spec.getItemId(i), i);
            });
            multiSelect.setSelectedItems(newSelectedItems);
            return;
        }

        // Deselect current items.
        const newSelectedItems = new Map(multiSelect.selectedItems);
        items.forEach((i) => {
            newSelectedItems.delete(spec.getItemId(i));
        });
        multiSelect.setSelectedItems(newSelectedItems);
    }, [isSelectAllChecked, isSelectedAllIndeterminate, items, multiSelect, spec]);

    if (multiSelect) {
        // add the "select all" checkbox to the table header
        headers.unshift(
            <th
                className={classNames(styles.tableHeader, styles.tableHeaderCheckbox, styles.tableHeaderCentred)}
                key="multiselect-header"
                onClick={handleSelectAllChange}
            >
                <TableMultiSelectCheckbox
                    id={`table-${thisTableId}-select-all`}
                    checked={isSelectAllChecked}
                    indeterminate={isSelectedAllIndeterminate}
                    onChange={handleSelectAllChange}
                />
            </th>,
        );
    }

    return (
        <table className={classNames(styles.table, className)} {...props}>
            <thead>
                <tr>{headers}</tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
};