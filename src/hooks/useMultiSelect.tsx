import { useState } from 'react';

export enum SelectAllMode {
    /**
     * The "allSelected" flag should be set.
     * Selecting further items should deselect them.
     */
    FLAG,
    /**
     * Select all should only select items and not set the "allSelected" flag.
     */
    ITEMS,
}

export interface MultiSelect<I> {
    selectAllMode: SelectAllMode;
    /**
     * Whether all items are selected.
     */
    allSelected: boolean;
    setAllSelected: (allSelected: boolean) => void;
    /**
     * Map of selected items: Unique identifier of the item in the map -> item.
     * If "all" is selected, this list is inverted and contains the elements not selected.
     */
    selectedItems: Map<string | number, I>;
    /**
     * Setter for selected item IDs.
     */
    setSelectedItems: (selectedItems: Map<string | number, I>) => void;
}

export const useMultiSelect = <I,>(selectAllMode = SelectAllMode.FLAG): MultiSelect<I> => {
    const [selectedItems, setSelectedItems] = useState<Map<string | number, I>>(new Map());
    const [allSelected, setAllSelected] = useState<boolean>(false);
    return {
        selectAllMode,
        selectedItems,
        setSelectedItems,
        allSelected,
        setAllSelected,
    };
};
