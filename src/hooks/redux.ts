import { useDispatch } from "react-redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { TState, TDispatch } from "../store/store";

export const useTSelector: TypedUseSelectorHook<TState> = useSelector;
export const useTDispatch: TDispatch = useDispatch;