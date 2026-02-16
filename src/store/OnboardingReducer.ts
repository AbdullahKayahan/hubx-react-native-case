import { createSlice } from '@reduxjs/toolkit';
import { getItem, setItem } from '@/services/DeviceStorageService';
import { resetSubscription } from './SubscriptionReducer';

const onboardingReducer = createSlice({
    name: 'onboarding',
    initialState: { completed: getItem('onboarding')?.completed ?? false },
    reducers: {
        completeOnboarding: (state) => {
            state.completed = true;
            setItem('onboarding', { completed: true });
        },
        resetOnboarding: (state) => {
            state.completed = false;
            setItem('onboarding', { completed: false });
        },
    },
});

export const { completeOnboarding, resetOnboarding } = onboardingReducer.actions;
export default onboardingReducer.reducer;
