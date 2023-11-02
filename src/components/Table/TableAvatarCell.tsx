import React from 'react';
import { Avatar, OnAvatarErrorHandler } from '../Avatar/Avatar';
import { TableCell } from './TableCell';
import styles from './TableAvatarCell.module.scss';

interface TableAvatarCellProps {
    name: string;
    avatarId: string;
    avatarName: string;
    src?: string | undefined;
    disabled?: boolean;
    onError: OnAvatarErrorHandler,
}

/**
 * Table cell that displays an avatar and a name.
 * The avatar is expected to be 24px in size.
 */
export const TableAvatarCell: React.FC<TableAvatarCellProps> = ({
    name,
    avatarId,
    avatarName,
    src,
    disabled,
    onError
}) => {

    return (
        <TableCell kind="primary" disabled={disabled}>
            <div className={styles.avatarCell}>
                <Avatar
                    id={avatarId}
                    name={avatarName}
                    className={styles.avatar}
                    // If there was an avatar error, fall back to the letter avatar.
                    src={src}
                    size="24px"
                    onError={onError}
                />
                <div className={styles.userId}>{name}</div>
            </div>
        </TableCell>
    );
};
