import { configureStore } from '@reduxjs/toolkit';
import OnboardingReducer from './OnboardingReducer';
import SubscriptionReducer from './SubscriptionReducer';

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

const Store = configureStore({
    reducer: {
        onboarding: OnboardingReducer,
        subscription: SubscriptionReducer,
    },
});
export default Store;
