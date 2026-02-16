import { configureStore } from '@reduxjs/toolkit';
import OnboardingReducer from './OnboardingReducer';
import SubscriptionReducer from './SubscriptionReducer';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
    reducer: {
        onboarding: OnboardingReducer,
        subscription: SubscriptionReducer,
    },
});
export default store;
