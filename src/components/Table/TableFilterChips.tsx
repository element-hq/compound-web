import React from 'react';
import { TableFilter } from '.';
import { FilterChip } from '../FilterChips/FilterChip';
import { FilterChipsContainer } from '../FilterChips/FilterChipsContainer';

interface TableFilterChipsProps {
    filters: TableFilter[];
}

export const TableFilterChips: React.FC<TableFilterChipsProps> = ({ filters }) => {
    const filterChips = filters
        .filter((f) => f.value)
        .map((f) => {
            const handleClick = () => {
                f.setValue(false);
            };
            return <FilterChip key={f.label} label={f.label} onClick={handleClick} />;
        });

    return <FilterChipsContainer>{filterChips}</FilterChipsContainer>;
};
