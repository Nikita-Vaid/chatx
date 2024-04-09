import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { rootPersistConfig, rootReducer } from './rootReducer';
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from "react-redux";

const store = configureStore({
    reducer: persistReducer(rootPersistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }),
});

const persistor =  persistStore(store);
const {dispatch} = store;
export { store, persistor, dispatch };

// Exporting useDispatch and useSelector from the store file
export const useSelector = useAppSelector;
export const useDispatch = useAppDispatch;