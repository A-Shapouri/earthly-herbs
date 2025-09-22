import { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ShopActions } from '@store/shop/shop-actions';

/**
 * Custom hook for optimistic cart updates with debouncing
 * 
 * Features:
 * - Immediate UI updates for better UX
 * - Debounced API calls (default 500ms) to prevent excessive requests
 * - Automatic sync with server responses
 * - Optimistic state indicators
 * 
 * @param cartItem - Current cart item from Redux store
 * @param debounceMs - Debounce delay in milliseconds (default: 500)
 * @returns Object with display quantity, update functions, and optimistic state
 */

interface CartItem {
    id: string;
    quantity: string;
    [key: string]: any;
}

interface UseOptimisticCartProps {
    cartItem: CartItem | undefined;
    debounceMs?: number;
}

export const useOptimisticCart = ({ cartItem, debounceMs = 500 }: UseOptimisticCartProps) => {
    const dispatch = useDispatch();
    const [optimisticQuantity, setOptimisticQuantity] = useState<number | null>(null);
    const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const pendingUpdateRef = useRef<CartItem | null>(null);

    // Reset optimistic quantity when cart item changes from server
    useEffect(() => {
        if (cartItem && optimisticQuantity !== null) {
            // Only reset if the server quantity is different from our optimistic quantity
            const serverQuantity = parseInt(cartItem.quantity);
            if (serverQuantity !== optimisticQuantity) {
                setOptimisticQuantity(null);
            }
        } else if (!cartItem && optimisticQuantity !== null) {
            // Item was deleted from server, reset optimistic state
            setOptimisticQuantity(null);
        }
    }, [cartItem?.quantity, cartItem]);

    // Get the current display quantity (optimistic or server)
    const displayQuantity = optimisticQuantity !== null
        ? optimisticQuantity
        : cartItem ? parseInt(cartItem.quantity) : 0;

    // Debounced API call function
    const debouncedApiCall = useCallback((updatedItem: CartItem, newQuantity: number) => {
        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
        }

        debounceTimeoutRef.current = setTimeout(() => {
            if (newQuantity <= 0) {
                // Delete item if quantity is 0 or less
                dispatch(ShopActions.deleteCartItem({
                    cartId: updatedItem.id,
                }));
            } else {
                // Update quantity
                dispatch(ShopActions.updateCartItem({
                    ...updatedItem,
                    quantity: newQuantity.toString(),
                }));
            }
            pendingUpdateRef.current = null;
        }, debounceMs);
    }, [dispatch, debounceMs]);

    // Optimistic increase function
    const optimisticIncrease = useCallback(() => {
        if (!cartItem) return;

        const currentQuantity = optimisticQuantity !== null
            ? optimisticQuantity
            : parseInt(cartItem.quantity);
        const newQuantity = currentQuantity + 1;

        setOptimisticQuantity(newQuantity);
        pendingUpdateRef.current = cartItem;
        debouncedApiCall(cartItem, newQuantity);
    }, [cartItem, optimisticQuantity, debouncedApiCall]);

    // Optimistic decrease function
    const optimisticDecrease = useCallback(() => {
        if (!cartItem) return;

        const currentQuantity = optimisticQuantity !== null
            ? optimisticQuantity
            : parseInt(cartItem.quantity);
        const newQuantity = Math.max(0, currentQuantity - 1);

        setOptimisticQuantity(newQuantity);
        pendingUpdateRef.current = cartItem;
        debouncedApiCall(cartItem, newQuantity);
    }, [cartItem, optimisticQuantity, debouncedApiCall]);

    // Immediate delete function (no debouncing needed for delete button)
    const immediateDelete = useCallback(() => {
        if (!cartItem) return;

        // Clear any pending updates
        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
        }

        // Set optimistic quantity to 0 immediately
        setOptimisticQuantity(0);

        // Call delete API immediately
        dispatch(ShopActions.deleteCartItem({
            cartId: cartItem.id,
        }));
    }, [cartItem, dispatch]);

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (debounceTimeoutRef.current) {
                clearTimeout(debounceTimeoutRef.current);
            }
        };
    }, []);

    return {
        displayQuantity,
        optimisticIncrease,
        optimisticDecrease,
        immediateDelete,
        isOptimistic: optimisticQuantity !== null,
    };
};
