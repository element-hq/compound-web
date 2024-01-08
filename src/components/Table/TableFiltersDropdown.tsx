import React, { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import { FloatingMenu } from '../Menu/FloatingMenu';

import { TableFilter } from '.';
import Check24 from '@vector-im/compound-design-tokens/icons/check.svg';
import Filter20 from '@vector-im/compound-design-tokens/icons/filter.svg';
import styles from './TableFiltersDropdown.module.css';
import { MenuItem } from '../MenuItem/MenuItem';
import { Button } from '../Button/Button';
import classNames from 'classnames';

interface TableFiltersDropdownProps {
    filters: TableFilter[];
}

interface TableFilterDropdownItemProps {
    filter: TableFilter;
}

const TableFilterDropdownItem: React.FC<TableFilterDropdownItemProps> = ({ filter }) => {
    const handleClick = useCallback(() => {
        filter.setValue(!filter.value);
    }, [filter]);
    return (
        <div className={styles.menuitem} role="menuitemcheckbox" onClick={handleClick}>
            <input type="checkbox" checked={filter.value} />
            <label>{filter.label}</label>
        </div>
    );
};

export const TableFiltersDropdown: React.FC<TableFiltersDropdownProps> = ({ filters }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropDown = useCallback(() => {
        setIsDropdownOpen(!isDropdownOpen);
    }, [setIsDropdownOpen, isDropdownOpen]);

    const items = filters.map((filter) => <TableFilterDropdownItem key={filter.id} filter={filter} />);

    const buttonClassName = classNames(styles.toggle, {
        [styles.open]: isDropdownOpen,
    })

    const buttonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    // Track clicks outside of dropdown
    useEffect(() => {
        const menu = menuRef.current;
        const button = buttonRef.current;
        if (!menu || !button) {
            return;
        }
        if (!isDropdownOpen) {
            return;
        }
        const listener = (evt: Event) => {
            const target = evt.target as HTMLElement;
            if (target !== button && !button.contains(target) && !menu.contains(target)) {
                setIsDropdownOpen(false);
            }
        };
        menu.ownerDocument.addEventListener('click', listener);
        return () => menu.ownerDocument.removeEventListener('click', listener);
    }, [isDropdownOpen, menuRef, buttonRef]);

    return <>
        <Button ref={buttonRef} Icon={Filter20} className={buttonClassName} size="sm" onClick={toggleDropDown} />
        {isDropdownOpen ? <FloatingMenu ref={menuRef} className={styles.floatingMenu} title="Filters">
            {items}
        </FloatingMenu> : null}
    </>;
};
