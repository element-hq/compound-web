import React, { FormEvent, useEffect, useRef } from 'react';

import styles from './TableMultiSelectCheckbox.module.css';

interface TableMultiSelectCheckboxProps {
    checked: boolean;
    id: string;
    indeterminate?: boolean;
    onChange?: (event: FormEvent<HTMLInputElement>) => void;
}

export const TableMultiSelectCheckbox: React.FC<TableMultiSelectCheckboxProps> = ({
    checked,
    id,
    indeterminate,
    onChange,
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            // indeterminate cannot be set as an attribute. It must be set via JavaScript.
            // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes
            inputRef.current.indeterminate = !!indeterminate;
        }
    }, [inputRef, indeterminate]);

    return (
        <label className={styles.label} htmlFor={id}>
            <input id={id} ref={inputRef} type="checkbox" checked={checked} onChange={onChange} />
        </label>
    );
};
