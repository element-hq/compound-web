import React from 'react';
import styles from './FilterChipsContainer.module.css';

interface FilterChipsContainerProps {
    children: React.ReactNode;
}

export const FilterChipsContainer: React.FC<FilterChipsContainerProps> = ({ children }) => {
    return <div className={styles.filterChipsContainer}>{children}</div>;
};
