import { createSlice } from '@reduxjs/toolkit';
import { deleteItem, getItem, setItem } from '@/services/DeviceStorageService';

const SubscriptionReducer = createSlice({
    name: 'subscription',
    initialState: { status: getItem('subscription')?.status ?? 'free' },
    reducers: {
        subscribe: (state) => {
            state.status = 'plus';
            setItem('subscription', { status: 'plus' });
        },
        resetSubscription: (state) => {
            state.status = 'free';
            deleteItem('subscription');
        },
    },
});

export const { subscribe, resetSubscription } = SubscriptionReducer.actions;
export default SubscriptionReducer.reducer;
