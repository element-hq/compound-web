import React from 'react';
import { TableFilter } from '.';
import { OrderByProps } from '../../hooks/useOrderBy';
import { SortOption } from './Table';
import { TableFiltersDropdown } from './TableFiltersDropdown';

import styles from './TableHeadline.module.css';
import { TableSort } from './TableSort';

interface TableHeadlineProps {
    fromItem: number;
    orderBy?: OrderByProps;
    title: string;
    toItem: number;
    totalItems: number;
    filters?: TableFilter[];
    sortOptions?: SortOption[];
    /**
     * Whether to show from / to item
     */
    hasPagination?: boolean;
}

export const TableHeadline: React.FC<TableHeadlineProps> = ({
    fromItem,
    orderBy,
    totalItems,
    title,
    toItem,
    filters,
    sortOptions,
    hasPagination = true,
}) => {
    const pages = hasPagination ? (
        <>
            Showing {fromItem}-{toItem} of <b>{totalItems}</b>
        </>
    ) : (
        <>
            Showing all <b>{totalItems}</b>
        </>
    );

    return (
        <div className={styles.tableHeadline}>
            <div className={styles.tableHeadlineTitle}>{title}</div>
            <div className={styles.paginationAndInfo}>
                <div className={styles.tableHeadlinePages}>{pages}</div>
                {filters?.length && <TableFiltersDropdown filters={filters} />}
                {orderBy && sortOptions && <TableSort orderBy={orderBy} sortOptions={sortOptions} />}
            </div>
        </div>
    );
};
