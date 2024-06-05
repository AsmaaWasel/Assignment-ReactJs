import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

/**
 * Custom hook to get the Redux dispatch function with the correct type
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * Typed selector hook to access the Redux store state with the correct type
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
