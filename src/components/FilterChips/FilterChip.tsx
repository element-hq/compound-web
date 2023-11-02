import { Badge } from '../Badge/Badge';
import Close20 from '@vector-im/compound-design-tokens/icons/close.svg'
import React from 'react';
import styles from './FilterChip.module.css';

interface FilterChipProps {
    label: string;
    onClick?: () => void;
}

export const FilterChip: React.FC<FilterChipProps> = ({ label, onClick }) => {
    return (
        <Badge className={styles.filterChip}>
            <div className={styles.filterChipButton} onClick={onClick} role="button">
                {label}
                <Close20 />
            </div>
        </Badge>
    );
};
