import { Key, MouseEvent, ReactElement, Ref, useCallback } from 'react';
import classNames from 'classnames';
import { MultiSelect } from '../../hooks/useMultiSelect';
import { TableSpec } from './Table';
import { TableCell } from './TableCell';
import { TableMultiSelectCheckbox } from './TableMutliSelectCheckbox';
import styles from './TableRow.module.css';

export interface TableRowProps<I> {
    item: I;
    rowKey: Key;
    tableSpec: TableSpec<I>;
    onItemClicked?: (item: I) => void;
    multiSelect?: MultiSelect<I>;
    tableId: number;
    rowRef?: Ref<HTMLTableRowElement>;
}

export interface TableRowComponent<I> {
    (props: TableRowProps<I>): ReactElement;
    displayName: string;
}

export const TableRow = <I,>({
    item,
    rowKey,
    tableSpec,
    onItemClicked,
    multiSelect,
    tableId,
    rowRef,
}: TableRowProps<I>) => {
    const itemId = tableSpec.getItemId(item);
    const cells = tableSpec.columns.map((columnSpec) => {
        return <columnSpec.cell key={`${rowKey}.${columnSpec.id}`} item={item} />;
    });

    const handleSelectChange = useCallback(() => {
        if (!multiSelect) return;

        const newSelectedItems = new Map(multiSelect.selectedItems);
        if (newSelectedItems.has(itemId)) {
            newSelectedItems.delete(itemId);
        } else {
            newSelectedItems.set(itemId, item);
        }

        multiSelect.setSelectedItems(newSelectedItems);
    }, [item, itemId, multiSelect]);

    const handleSelectCellClick = useCallback(
        (event: MouseEvent<HTMLElement>) => {
            // stop propagation here to prevent a click on the table item itself
            event.stopPropagation();
            // do the same as onChange, if the user accidentally clicked the cell instead of the checkbox
            handleSelectChange();
        },
        [handleSelectChange],
    );

    if (multiSelect) {
        let multiSelectChecked = multiSelect.selectedItems.has(itemId);

        if (multiSelect.allSelected) {
            // In "select all" case selected items invert the selection.
            multiSelectChecked = !multiSelect.selectedItems.has(itemId);
        }

        cells.unshift(
            <TableCell centred={true} kind="checkbox" onClick={handleSelectCellClick}>
                <TableMultiSelectCheckbox
                    id={`table-${tableId}-select-${itemId}`}
                    checked={multiSelectChecked}
                    onChange={handleSelectChange}
                />
            </TableCell>,
        );
    }

    const classes = classNames(styles.tableRow, {
        [styles.tableRowClickable]: !!onItemClicked,
    });

    const onRowClicked = useCallback(() => {
        onItemClicked?.(item);
    }, [onItemClicked, item]);

    return (
        <tr ref={rowRef} className={classes} onClick={onRowClicked}>
            {cells}
        </tr>
    );
};
TableRow.displayName = 'TableRow';