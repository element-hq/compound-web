import { useState } from 'react';

export type OrderByDirection = 'f' | 'b';

export interface OrderByProps {
    /**
     * The order by field id. Undefined means no specific order.
     */
    orderById: string | undefined;
    /**
     * Setter for the oder by field id.
     * It does not have to be a field of the table spec.
     * It can be any field supported by the underlying API.
     */
    setOrderById: (fieldId: string) => void;
    /**
     * The order by direction.
     */
    orderByDirection?: OrderByDirection;
    setOrderByDirection: (orderByDirection: OrderByDirection) => void;
}

export const useOrderBy = (defaultOrderBy: string | undefined = undefined): OrderByProps => {
    const [orderById, setOrderById] = useState<string | undefined>(defaultOrderBy);
    const [orderByDirection, setOrderByDirection] = useState<OrderByDirection>('f');
    return {
        orderById,
        setOrderById,
        orderByDirection,
        setOrderByDirection,
    };
};
