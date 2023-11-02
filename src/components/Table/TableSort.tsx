import React, { useCallback, useState } from 'react';
import { OrderByProps } from '../../hooks/useOrderBy';
import { SortOption } from './Table';
import Sort from '@vector-im/compound-design-tokens/icons/filter.svg'; // TODO: Fixme
import Check24 from '@vector-im/compound-design-tokens/icons/check.svg';
import Filter20 from '@vector-im/compound-design-tokens/icons/filter.svg';
import styles from './TableSort.module.css';
import { Button } from '../Button/Button';
import { FloatingMenu } from '../Menu/FloatingMenu';
import { MenuItem } from '../..';

interface TableSortProps {
    orderBy: OrderByProps;
    sortOptions: SortOption[];
}

interface TableSortItemProps {
    orderBy: OrderByProps;
    sortOption: SortOption;
}

const TableSortItem: React.FC<TableSortItemProps> = ({ orderBy, sortOption }) => {
    const icon =
        () => orderBy.orderById === sortOption.orderById && orderBy.orderByDirection === sortOption.orderByDirection ? (
            <Check24 />
        ) : (
            <div className={styles.iconPlaceholder}></div>
        );

    const handleClick = useCallback(() => {
        orderBy.setOrderById(sortOption.orderById);
        orderBy.setOrderByDirection(sortOption.orderByDirection);
    }, [orderBy, sortOption]);

    return (
        <MenuItem Icon={icon} label={sortOption.label} key={sortOption.label} className={styles.tableSortItem} onClick={handleClick}>
            {sortOption.label}
        </MenuItem>
    );
};

export const TableSort: React.FC<TableSortProps> = ({ orderBy, sortOptions }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleSortDropdown = useCallback(() => {
        setIsDropdownOpen(!isDropdownOpen);
    }, [setIsDropdownOpen, isDropdownOpen]);

    const items = sortOptions.map((sortOption) => (
        <TableSortItem key={sortOption.label} sortOption={sortOption} orderBy={orderBy} />
    ));

    return <div>
        <Button onClick={toggleSortDropdown}>
            <Sort />
        </Button>
        {isDropdownOpen ? <FloatingMenu title="Sort Order">
            {items}
        </FloatingMenu> : null}
    </div>;
};
