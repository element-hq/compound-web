import React from 'react';
import classNames from 'classnames';

import styles from './TableCell.module.css';

interface TableCellProps extends React.ComponentPropsWithoutRef<'td'> {
    /**
     * Whether the cell content should be centred.
     */
    centred?: boolean;
    /**
     * Kind of the cell. Has impact on the cell styles.
     */
    kind?: 'primary' | 'checkbox';
    disabled?: boolean;
}

export const TableCell: React.FC<TableCellProps> = ({
    kind,
    disabled,
    className,
    children,
    centred,
    width,
    ...props
}) => {
    return (
        <td
            className={classNames(className, styles.tableCell, {
                [styles.tableCellPrimary]: kind === 'primary',
                [styles.tableCellCheckbox]: kind === 'checkbox',
                [styles.tableCellDisabled]: disabled,
                [styles.tableCellCentred]: centred,
            })}
            {...props}
        >
            {children}
        </td>
    );
};
